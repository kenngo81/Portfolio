import styled from "styled-components";
import useStore from "../../hook/useStore";
import React from "react";

const StyledSlideShow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const StyledSlide = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    transition: left 1s ease-in-out;
`;

function SlideShow(props) {
    const slideEl = React.useRef(null);
    const setSlide = useStore(state => state.setPage);
    const pageIndex = useStore(state => state.slideIndex);
    const nextPage = useStore(state => state.nextPage);
    const prevPage = useStore(state => state.prevPage);
    const childrenCount = React.useMemo(() => React.Children.count(props.children), [props.children]);
    const center = React.useMemo(() => Math.round((childrenCount - 1) / 2), [childrenCount]);
    const touchStartX = React.useRef(0);

    const moveSlide = (index) => {
        if (slideEl.current) {
            slideEl.current.style.left = `${100 * -(index - center)}%`;
        }
        setSlide(index);
    }

    const passPropsTo = (component, index) => {
        return React.cloneElement(component, { componentIndex: index, center, moveSlide });
    };

    React.useEffect(() => {
        moveSlide(center);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        if (slideEl.current) {
            slideEl.current.style.left = `${100 * -(pageIndex - center)}%`;
        }
    }, [pageIndex, center]);

    const onTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diffX = touchStartX.current - touchEndX;
        if (Math.abs(diffX) > 60) {
            if (diffX > 0) nextPage();
            else prevPage();
        }
    };

    return (
        <StyledSlideShow onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <StyledSlide ref={slideEl}>
                {React.useMemo(
                    () => React.Children.map(props.children, passPropsTo),
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    [props.children])}
            </StyledSlide>
        </StyledSlideShow>
    );
}

export default React.memo(SlideShow);
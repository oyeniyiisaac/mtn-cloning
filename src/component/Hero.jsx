import { useEffect, useRef, useState } from 'react';
import mobileHero7 from '../assets/mobile/MTN-Brand-Africa-Hall-of-Fame-banner_Mobile_414x631.webp';
import mobileHero3 from '../assets/mobile/MTN-MIP-Mobile_Web_Banner-02-1.webp';
import mobileHero4 from '../assets/mobile/MTN_com-BannerTemplate-V4-1-.webp';
import mobileHero6 from '../assets/mobile/MTN_Forbes-Award-Banners__PC-Landing-Page_Mobile_414x.webp';
import mobileHero8 from '../assets/mobile/Picture12.webp';
import mobileHero5 from '../assets/mobile/Plain-Yello-banner-yellow-mobile.webp';
import mobileHero1 from '../assets/mobile/Q126_Booklet-cover-2.webp';
import mobileHero2 from '../assets/mobile/Suite-Report.webp';

const mobileSlides = [
    mobileHero1,
    mobileHero2,
    mobileHero3,
    mobileHero4,
    mobileHero5,
    mobileHero6,
    mobileHero7,
    mobileHero8,
];

const slides = [
    {
        // eye: "Q1 2026 · Investors",
        title: "MTN Group Q1 Results",
        sub: "For the period ended 31 March 2026",
        btn: "Read More",
        bg: "url(https://www.mtn.com/wp-content/uploads/2026/05/MTN_com-BannerTemplate-V4-2_.jpg)",
    },
    {
        // eye: "Annual Reports · 2025",
        title: "FY 2025 Reporting Suite",
        sub: "Accelerating impact: MTN publishes 2025 reports",
        btn: "View Reports",
        bg: "url(https://www.mtn.com/wp-content/uploads/2026/04/Banner-11.jpg)",
    },
    {
        // eye: "News · Innovation",
        title: "MTN Pan-African Media Innovation Programme",
        // sub: "Empowering the next generation of African storytellers",
        btn: "Read More",
        bg: "url(https://www.mtn.com/wp-content/uploads/2026/04/imgi_26_MTN-Pan-African-Banner-Desktop.png)",
    },
    {
        // eye: "Annual Results · 2025",
        title: "MTN Group Annual Results",
        sub: "For the year ended 31 December 2025",
        btn: "Read More",
        bg: "url(https://www.mtn.com/wp-content/uploads/2026/03/MTN-FY25_1280x720.png)",
    },
    {
        // eye: "Recognition · Forbes 2025",
        title: "MTN takes notes of media reporting on group's interesting on Iran",
        sub: "MTN Group ranked 3rd in global telecom",
        btn: "Learn More",
        bg: "url(https://www.mtn.com/wp-content/uploads/2026/03/Picture3.png)",
    },
    {
        // eye: "Brand Africa · 2025",
        title: "Forbe's 2025 world best employers",
        sub: "MTN group recognised among forbes 2025 world best employers",
        btn: "Read More",
        bg: "url(https://www.mtn.com/wp-content/uploads/2025/10/MTN_Forbes-Award-Banners__PC-Landing-Page_Desktop_1920x817_v1.png)",
    },
    {
        // eye: "Brand Africa · 2025",
        title: "Brand Africa 2025 Recogntion",
        sub: "MTN inducted into Brand Africa Hall of Fame",
        btn: "Read More",
        bg: "url(https://www.mtn.com/wp-content/uploads/2025/06/MTN-Brand-Africa-Hall-of-Fame-banner_Desktop_1920x817.png)",
    },
    {
        // eye: "Brand Africa · 2025",
        title: "Committed to transformation",
        sub: "MTN Maintains Level 1 B-BBEE contributor status",
        btn: "Read More",
        bg: "url(https://www.mtn.com/wp-content/uploads/2025/04/Picture11.png)",
    },
];

const pixelPatterns = [
    [1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1],
    [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
];

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const timerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const total = slides.length;

    const goTo = (index) => {
        setCurrent(index);
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % total);
        }, 4500);
    };

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % total);
        }, 4500);
        return () => clearInterval(timerRef.current);
    }, [total]);

    // Responsive breakpoint detection
    useEffect(() => {
        const onResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <div style={{ ...styles.root, height: isMobile ? '630px' : styles.root.height }}>
            {/* Track */}
            <div style={styles.track}>
                {slides.map((slide, i) => {
                    const pat = pixelPatterns[i % pixelPatterns.length];
                    const isImage = /^url\(/.test(slide.bg);
                    const isActive = i === current;
                    const mobileBackgroundImage = mobileSlides[i];
                    const backgroundImage = isMobile ? `url(${mobileBackgroundImage})` : slide.bg;
                    const slideStyle = {
                        ...styles.slide,
                        opacity: isActive ? 1 : 0,
                        zIndex: isActive ? 1 : 0,
                        pointerEvents: isActive ? "auto" : "none",
                        ...(isImage
                            ? {
                                backgroundImage,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: isMobile ? '#000' : 'transparent',
                            }
                            : { background: slide.bg })
                    };

                    return (
                        <div
                            key={i}
                            style={slideStyle}
                        >
                            {/* Light scatter overlay */}
                            <div style={styles.scatterOverlay} />

                            {/* Pixel decoration */}
                            <div style={styles.pixelBlock}>
                                {pat.map((v, j) => (
                                    <div
                                        key={j}
                                        style={{
                                            ...styles.pixel,
                                            background: v ? "#000" : "transparent",
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Vertical accent lines */}
                            <div style={{ ...styles.vLine, right: 68, height: "55%", top: "22%" }} />
                            <div style={{ ...styles.vLine, right: 50, height: "38%", top: "31%" }} />

                            {/* Glass panel */}
                            <div style={{
                                ...styles.glass,
                                width: isMobile ? '100%' : styles.glass.width,
                                minWidth: isMobile ? 'auto' : styles.glass.minWidth,
                                padding: isMobile ? '18px 16px' : styles.glass.padding,
                                height: isMobile ? 'auto' : styles.glass.height,
                                top: isMobile ? 'auto' : styles.glass.top,
                                bottom: isMobile ? 0 : 'auto',
                                borderRight: isMobile ? 'none' : styles.glass.borderRight,
                                background: isMobile ? 'rgba(0,0,0,0.28)' : styles.glass.background,
                            }}>
                                <p style={styles.eyebrow}>
                                    {slide.eye || ""}
                                </p>

                                <div style={styles.glassBody}>
                                    <h2 style={{ ...styles.title, fontSize: isMobile ? 28 : styles.title.fontSize }}>{slide.title}</h2>
                                    <p style={{ ...styles.sub, fontSize: isMobile ? 13 : styles.sub.fontSize }}>{slide.sub}</p>
                                    <button style={{ ...styles.btn, padding: isMobile ? '8px 18px' : styles.btn.padding, fontSize: isMobile ? 12 : styles.btn.fontSize }}>{slide.btn}</button>
                                </div>

                                {/* Dots */}
                                <div style={styles.dotsRow}>
                                    {slides.map((_, j) => (
                                        <button
                                            key={j}
                                            aria-label={`Go to slide ${j + 1}`}
                                            onClick={() => goTo(j)}
                                            style={{
                                                ...styles.dot,
                                                ...(j === current ? styles.dotActive : {}),
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const styles = {
    root: {
        position: "relative",
        width: "100%",
        height: 570,
        overflow: "hidden",
        fontFamily: "Georgia, serif",
    },
    track: {
        position: "relative",
        width: "100%",
        height: "100%",
    },
    slide: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        transition: "opacity 0.8s ease-in-out",
    },
    scatterOverlay: {
        position: "absolute",
        inset: 0,
        background:
            "radial-gradient(ellipse at 68% 45%, rgba(255,255,255,0.09) 0%, transparent 60%)",
        pointerEvents: "none",
        zIndex: 1,
    },
    // pixelBlock: {
    //     position: "absolute",
    //     bottom: 28,
    //     right: 36,
    //     zIndex: 2,
    //     display: "grid",
    //     gridTemplateColumns: "repeat(5, 16px)",
    //     gap: 5,
    //     opacity: 0.25,
    // },
    // pixel: {
    //     width: 16,
    //     height: 16,
    //     borderRadius: 2,
    // },
    vLine: {
        position: "absolute",
        width: 1,
        background: "rgba(255,255,255,0.10)",
        zIndex: 2,
    },
    glass: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "36%",
        minWidth: 240,
        height: "100%",
        zIndex: 10,
        background: "rgba(0,0,0,0.08)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(16px)",
        borderRight: "1px solid rgba(255,255,255,0.10)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "30px 24px 22px",
    },
    eyebrow: {
        fontSize: 10,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.48)",
        fontFamily: "sans-serif",
        fontStyle: "normal",
        margin: 0,
    },
    glassBody: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    title: {
        fontSize: 54,
        fontWeight: 700,
        fontStyle: "san-serif",
        color: "#fff",
        lineHeight: 1.24,
        marginBottom: 9,
        textShadow: "0 2px 10px rgba(0,0,0,0.5)",
        margin: "0 0 9px 0",
    },
    sub: {
        fontSize: 12.5,
        color: "rgba(255,255,255,0.65)",
        lineHeight: 1.58,
        fontFamily: "sans-serif",
        fontStyle: "normal",
        margin: 0,
    },
    btn: {
        display: "inline-block",
        marginTop: 16,
        background: "#ffcb05",
        color: "#111",
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        fontFamily: "sans-serif",
        padding: "9px 40px",
        borderRadius: 22,
        border: "none",
        cursor: "pointer",
        width: "fit-content",
    },
    dotsRow: {
        display: "flex",
        alignItems: "center",
        gap: 20,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "#909090",
        border: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
        flexShrink: 0,
        padding: 0,
    },
    dotActive: {
        width: 14,
        height: 14,
        borderRadius: 10,
        background: "#ffcb05",
        borderColor: "#fff",
        border: "2.5px solid #fff"
    },
};

import React, { Suspense, lazy } from 'react';

// Lazy load Swiper only when needed
const Swiper = lazy(() => import('swiper/react').then(module => ({ default: module.Swiper })));
const SwiperSlide = lazy(() => import('swiper/react').then(module => ({ default: module.SwiperSlide })));

// Load Swiper CSS dynamically
const loadSwiperCSS = () => {
  if (!document.querySelector('link[href*="swiper"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
    document.head.appendChild(link);
  }
};

interface DynamicSwiperProps {
  children: React.ReactNode;
  className?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  pagination?: boolean;
}

const DynamicSwiper: React.FC<DynamicSwiperProps> = ({ 
  children, 
  className = "", 
  slidesPerView = 1.2, 
  spaceBetween = 16,
  pagination = true 
}) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Load Swiper CSS only when mobile is detected
      if (mobile) {
        loadSwiperCSS();
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) {
    return <div className={className}>{children}</div>;
  }

  const [modules, setModules] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (isMobile) {
      import('swiper/modules').then(({ Pagination }) => {
        setModules([Pagination]);
      });
    }
  }, [isMobile]);

  return (
    <Suspense fallback={<div className={className}>{children}</div>}>
      <Swiper
        className={className}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        pagination={pagination}
        modules={modules}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </Suspense>
  );
};

export default DynamicSwiper;

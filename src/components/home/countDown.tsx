"use client";
import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';



function CountDown({ data }: any) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient1 w-[80vw] lg:px-24 mb-6 sm:mb-14 md:p-16 sm:p-12 p-7 max-w-[1350px] mx-auto rounded-3xl flex flex-wrap gap-6 md:justify-between justify-center"
    >
      {data?.map((counts: { id: React.Key | null | undefined; textColor: any; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; Value: number; value2: any; }) => (
        <div key={counts.id} className="text-center space-y-2">
        <h3 className="font-semibold text-xl" style={{ color: counts.textColor }}>
            {counts.title}
          </h3>
          {isVisible ? (
            <CountUp
              start={0}
              end={counts.Value}
              delay={0.2}
              duration={2.75}
              separator=","
            >
              {({ countUpRef }) => (
                <div className="text-3xl text-black md:text-5xl font-bold">
                  <span ref={countUpRef} />{counts.value2 || "+"}
                </div>
              )}
            </CountUp>
          ) : (
            <span className="text-3xl text-black md:text-5xl font-bold">0</span>
          )}
        </div>
      ))}
    </section>
  );
}

export default CountDown;

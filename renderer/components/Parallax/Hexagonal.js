import React from 'react';
import clsx from 'clsx';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxCloud() {
  const classes = useStyles();
  return (
    <div className={clsx(classes.parallaxWrap, classes.dotsWrap)}>
      <ParallaxProvider>
        <div className={clsx(classes.innerParallax, classes.large)}>
          <div className={classes.hexaWrap}>
            <Parallax
              y={[20, 40]}
              tagOuter="figure"
              className={clsx(classes.rightTopBack, classes.big)}
            >
              <svg className={classes.hexaBack}>
                <use xlinkHref="/static/images/crypto/parallax-back2.svg#main" />
              </svg>
            </Parallax>
            <Parallax
              y={[20, 30]}
              tagOuter="figure"
              className={clsx(classes.rightTopFront, classes.small)}
            >
              <svg width="585px" height="151px" viewBox="0 0 585 151" version="1.1">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g transform="translate(-143.000000, -88.000000)">
                    <g transform="translate(132.623862, 70.912032)">
                      <path d="M520.561173,148.252603 C520.561173,151.131802 522.101234,153.792433 524.601342,155.232033 L551.404725,170.666509 C553.904833,172.106108 556.984955,172.106108 559.485063,170.666509 L586.288446,155.232033 C588.788553,153.792433 590.328615,151.131802 590.328615,148.252603 L590.328615,117.383522 C590.328615,114.504194 588.788553,111.843692 586.288446,110.403963 L559.485063,94.9694871 C556.984955,93.5298879 553.904833,93.5298879 551.404725,94.9694871 L524.601342,110.403963 C522.101234,111.843692 520.561173,114.504194 520.561173,117.383522 L520.561173,148.252603 Z" fill="url(#hexaLinearGradient-2)" transform="translate(555.444894, 132.817998) rotate(-330.000000) translate(-555.444894, -132.817998)" />
                    </g>
                  </g>
                </g>
              </svg>
            </Parallax>
          </div>
          <div className={classes.hexaWrap}>
            <Parallax
              y={[40, 50]}
              tagOuter="figure"
              className={clsx(classes.leftBottomBack, classes.big)}
            >
              <svg className={classes.hexaBack}>
                <use xlinkHref="/static/images/crypto/parallax-back3.svg#main" />
              </svg>
            </Parallax>
            <Parallax
              y={[40, 60]}
              tagOuter="figure"
              className={clsx(classes.leftBottomFront, classes.small)}
            >
              <svg width="585px" height="151px" viewBox="0 0 585 151" version="1.1">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g transform="translate(-143.000000, -88.000000)">
                    <g transform="translate(132.623862, 70.912032)">
                      <path d="M15,67.3628158 C15,70.2420142 16.5400613,72.9026456 19.0401691,74.3422448 L45.8435518,89.7767212 C48.3436597,91.2163204 51.4237822,91.2163204 53.9238901,89.7767212 L80.7272727,74.3422448 C83.2273806,72.9026456 84.7674419,70.2420142 84.7674419,67.3628158 L84.7674419,36.4937339 C84.7674419,33.6144064 83.2273806,30.9539041 80.7272727,29.5141758 L53.9238901,14.0796994 C51.4237822,12.6401002 48.3436597,12.6401002 45.8435518,14.0796994 L19.0401691,29.5141758 C16.5400613,30.9539041 15,33.6144064 15,36.4937339 L15,67.3628158 Z" fill="url(#hexaLinearGradient-3)" transform="translate(49.883721, 51.928210) rotate(-330.000000) translate(-49.883721, -51.928210)" />
                    </g>
                  </g>
                </g>
              </svg>
            </Parallax>
          </div>
        </div>
      </ParallaxProvider>
    </div>
  );
}

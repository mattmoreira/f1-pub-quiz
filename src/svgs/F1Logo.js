import React from 'react'
import { animated } from 'react-spring'
import { useSpring } from 'react-spring'

const F1Logo = React.forwardRef((props, ref) => {
  const fillAnimation = useSpring({
    delay: 1900,
    from: { fill: '#ff1e00' },
    to: { fill: '#2F2D3D' }
  })

  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 149800000 37499946"
      fillRule="evenodd"
      clipRule="evenodd"
      ref={ref}
      {...props}>
      <defs>
        <style>{`.fil1{fill-rule:nonzero}`}</style>
      </defs>
      <g id="_895705984">
        <animated.path
          style={fillAnimation}
          className="fil0"
          d="M126517390 13417L89030823 37499984l23282723-38L149800076 13342zM0 37499984L28051051 9448933C34324312 3175673 41958844 13342 50830568 13342h72465379l-14057500 14057500H54512924c-6452145 0-12004498 2299918-16566880 6862224L21379126 37499984H0z"
        />
        <animated.path
          style={fillAnimation}
          className="fil0"
          d="M25039939 37499984l15939592-15939592c3421796-3421795 7586079-5146658 12425160-5146658l53490827 75-13032417 13032342H57204099c-2984126 0-5552126 1063710-7662161 3173782l-4880051 4880051H25039939z"
        />
        <animated.path
          style={fillAnimation}
          className="fil1"
          d="M123435185 37499984v-3938873h-1450885v-801033h3887207v801033h-1444007v3938873z"
        />
        <animated.path
          style={fillAnimation}
          className="fil1"
          d="M126500004 37499984v-4739906h1486186l878287 3232782 868006-3232782h1489663v4739906h-917064l-3440-3731452-966047 3731452h-953575l-961549-3731452-3440 3731452z"
        />
      </g>
    </animated.svg>
  )
})

export default F1Logo

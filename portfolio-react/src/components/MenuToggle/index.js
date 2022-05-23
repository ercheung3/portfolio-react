import './index.scss'
import { motion } from 'framer-motion'

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
)

const transition = { duration: 0.5 }

const MenuToggle = (props) => {
  const size = 46
  const color = 'hsl(21, 84%, 67%)'
  const blackColor = 'hsl(0, 0%, 18%)'
  return (
    <div className="menu-button" onClick={props.toggle}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Path
          animate={props.isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M 2 5 L 40 5', stroke: `${color}` },
            open: { d: 'M 3 32.782 L 34 5', stroke: `${color}` },
          }}
          transition={transition}
        />
        <Path
          d="M 2 18.846 L 40 18.846"
          stroke={`${color}`}
          animate={props.isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={props.isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M 2 32.782 L 40 32.782', stroke: `${color}` },
            open: { d: 'M 3 5 L 34 32.782', stroke: `${color}` },
          }}
          transition={transition}
        />
      </svg>
    </div>
  )
}

export default MenuToggle

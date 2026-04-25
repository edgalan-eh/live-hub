@AGENTS.md

# Animations
Always use **framer-motion** for animations and transitions. It is installed as a dependency.
- Use `motion.div`, `motion.p`, etc. for animated elements
- Use `whileInView` + `viewport={{ once: true }}` for scroll-triggered animations
- Use `whileHover` / `whileTap` on interactive elements (buttons, cards)
- Define reusable `variants` objects for consistent timing across the page

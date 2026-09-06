import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-white hover:bg-accent-hover',
        outline: 'border border-line-strong text-ink hover:border-ink hover:bg-raised',
        ghost: 'text-ink hover:bg-raised',
        deep: 'bg-deep-accent text-deep hover:bg-white',
        'deep-outline': 'border border-deep-line text-deep-ink hover:border-deep-accent hover:text-deep-accent',
      },
      size: {
        default: 'h-11 px-5',
        sm: 'h-9 px-4 text-[0.8125rem]',
        lg: 'h-12 px-7',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

/**
 * Navigation must use `asChild` with an <a>. Never a button with window.open —
 * that hides the destination from crawlers and breaks middle-click (brief §48).
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }

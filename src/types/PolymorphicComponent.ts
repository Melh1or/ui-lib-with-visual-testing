import type React from "react";

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

export type PolymorphicComponentProp<C extends React.ElementType, Props> = Omit<
  React.ComponentPropsWithoutRef<C>,
  PropsToOmit<C, Props>
> &
  React.PropsWithChildren<AsProp<C> & Props>;

// States
export type RootState = {
  activeLink: string;
}

// Actions
export type LinkAction = {
  type: string;
  payload: string;
}

// PROPS
export type NavbarProps = {
  setActiveLink: (link: string) => void;
  activeLink: string;
}

// ACTION TYPES
export const SET_ACTIVE_LINK = 'SET_ACTIVE_LINK';
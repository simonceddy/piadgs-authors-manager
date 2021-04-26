import { THEME_COLOUR_CLASSES } from '../shared/consts';

function AppLayout({ children }) {
  return (
    <div className={`p-2 w-full h-full flexColFromTop ${THEME_COLOUR_CLASSES}`}>
      {children}
    </div>
  );
}

export default AppLayout;

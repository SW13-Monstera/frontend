import { COLOR } from '../../../../constants/color';

export const modalStyle = {
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',

    width: 'fit-content',
    height: 'fit-content',

    background: COLOR.WHITE,
    border: 'none',
    borderRadius: '10px',

    transform: 'translate(-50%, -50%)',
  },

  overlay: {
    background: 'rgba(38, 38, 38, 0.15)',
    backdropFilter: 'blur(10px)',
    zIndex: '999',
  },
};

import {showMessage} from 'react-native-flash-message';
import {colors} from '..';

export const showError = message => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.error,
    color: colors.white,
  });
};

//bisa buat showMessage yang lain juga
// export const showSuccess = message => {
//     showMessage({
//       message: message,
//       type: 'default',
//       backgroundColor: colors.primary,
//       color: colors.white,
//     });
//   };

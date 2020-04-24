import swal from 'sweetalert2';
let defaultConfig = {
  toast: true,
  timer: 6000,
  position: "bottom-right",
  showConfirmButton: false,
}
export function error(message) {
  swal.fire({
    ...defaultConfig,
    title: "Error: ",
    text: message,
    icon: "error",
  });
}
export function success(message) {
    swal.fire({
      ...defaultConfig,
      title: "Success! ",
      text: message,
      icon: "success",
    });
}
export function warning(message) {
  swal.fire({
    ...defaultConfig,
    title: "Warning: ",
    text: message,
    icon: "warning",
  });
}
export default {
  error,
  success,
  warning,
}
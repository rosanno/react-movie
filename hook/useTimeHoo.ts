export const useTimeHook = (time: number) => {
  let hours = Math.floor(time / 60);
  let minutes = time % 60;

  return `${hours}hr ${minutes} min`;
};

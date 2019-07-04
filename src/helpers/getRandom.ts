export default function getRandom(from: number = 0, to: number = 1) {
  return from + Math.random() * (to - from);
}

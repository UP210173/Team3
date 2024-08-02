export const dateFormat = () => {
  const today = new Intl.DateTimeFormat( navigator.language, { month: "long", day: "numeric", year: "numeric" }).format( new Date() )
  return today;
}
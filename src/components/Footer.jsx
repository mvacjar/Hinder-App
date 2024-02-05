import useQuoteApi from '../hooks/useQuoteApi';

export default function Footer() {
  const { quote } = useQuoteApi();
  return (
    <div
      className={`w-screen font-serif
    align-middle
    text-center
    italic
    text-sm
    p-2 h-14
    pt-4 
    shadow-lg
    text-black-300
    bg-indigo-200 `}
    >
      "{quote}" <br />
      Group project by{' '}
      <a href='https://github.com/OskarSollenberg'>Oskar</a>,{' '}
      <a href='https://github.com/marcusryden92'>Marcus</a>,
      <a href='https://github.com/mvacjar'>Maria</a> and{' '}
      <a href='https://github.com/Nesrinemh'>Nesrine</a>.
    </div>
  );
}

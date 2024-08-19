import logo from "../assets/quiz-logo.png"

const Header = () => {
  return (
    <header>
        <img src={logo} alt="logo image" />
        <h1>ReactQuiz</h1>
    </header>
  )
}

export default Header
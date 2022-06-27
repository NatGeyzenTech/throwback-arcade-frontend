import './LoadScreen.css';

const LoadScreen = () => {
  return (
    <section className="load-screen">
      <header>
        <h1>
          <span className="title-red">Throwback</span>
          <span className="title-yellow">Arcade</span>
        </h1>
        <button className="top-left">Sign in</button>
        <button className="top-right">Hi-scores</button>
      </header>
			<nav>

			</nav>
			<footer>
				<p className="footer-text top">
					This is a personal project created for learning and demonstration purposes only, not for commercial use. <br/>
					All rights for the games go to their respective copyright owners.
				</p>
			</footer>
    </section>
    )
}

export default LoadScreen;
import './App.css'
import Header from './components/Header';
function App() {
  return (
    <>
      <Header></Header>

      <main>

      </main>
      <footer>
        <footer className="mt-130 border footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
          </aside>
        </footer>
      </footer>
    </>

  );
}

export default App

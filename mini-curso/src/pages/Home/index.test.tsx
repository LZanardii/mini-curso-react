import { render, screen} from "@testing-library/react"
import Home from "."

describe("Home Page", () => {
    test("Verifica renderização texto"), () =>{
        render(<Home/>);
        expect(screen.getByText("Coleta Seletiva")).toBeInTheDocument();
        expect(screen.getByText("Cadastrar novo local de coleta")).toBeInTheDocument();
    }
})
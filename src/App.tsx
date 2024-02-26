import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "@/components/Home";
import { Question } from "@/features/question/Question";
import { ThemeProvider } from "./components/ui/theme-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/question/:type",
    element: <Question />,
  },
]);

export default function App() {
  return (
    <main className='max-w-[72.5rem] mx-auto px-6 py-4'>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <RouterProvider router={router} />
      </ThemeProvider>
    </main>
  );
}

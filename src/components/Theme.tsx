import { Switch } from "@/components/ui/switch";
import moonLight from "@/assets/icon-moon-light.svg";
import moonDark from "@/assets/icon-moon-dark.svg";
import sunLight from "@/assets/icon-sun-light.svg";
import sunDark from "@/assets/icon-sun-dark.svg";
import { useTheme } from "@/components/ui/theme-provider";

let moonIcon = moonDark;
let sunIcon = sunDark;

export const Theme = ({ title }: { title?: React.ReactNode }) => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === "dark") {
      moonIcon = moonDark;
      sunIcon = sunDark;
      setTheme("light");
    } else if (theme === "light") {
      moonIcon = moonLight;
      sunIcon = sunLight;
      setTheme("dark");
    }
  };

  return (
    <header className='flex items-center justify-between md:mx-16 md:my-12 xl:mx-0'>
      {title ? <h1 className='capitalize'>{title}</h1> : <></>}
      <div className='ml-auto flex items-center justify-between gap-2'>
        <img src={sunIcon} alt='sun icon' className='w-4 md:w-6' />
        <Switch className='' onClick={handleTheme} />
        <img src={moonIcon} alt='moon icon' className='w-4 md:w-6' />
      </div>
    </header>
  );
};

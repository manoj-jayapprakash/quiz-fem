import { Theme } from "@/components/Theme";
import { useParams } from "react-router-dom";

export const Question = () => {
  const params = useParams();
  return (
    <div>
      <Theme title={params.type} />
    </div>
  );
};

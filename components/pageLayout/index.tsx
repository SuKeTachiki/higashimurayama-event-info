import { Header } from "./header";
import { Contents } from "./contents";

type Props = {
  mainContent: JSX.Element;
};

export function PageLayout(props: Props) {
  return (
    <div>
      <Header></Header>
      <Contents mainContent={props.mainContent}></Contents>
    </div>
  );
}

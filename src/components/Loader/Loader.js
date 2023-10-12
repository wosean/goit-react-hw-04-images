import { MagnifyingGlass } from "react-loader-spinner";

function Load() {
  return (
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{ margin: "0 auto" }}
      wrapperClass=""
      glassColor = '#c0efff'
      color='#0000ff'
    />
  );
}

export default Load;
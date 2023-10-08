import { MagnifyingGlass } from "react-loader-spinner";

function Load() {
  return (
    <MagnifyingGlass
      visible={true}
      height="80"
      width="auto"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor = '#c0efff'
      color='#0000ff'      
    />
  
  );
}

export default Load;

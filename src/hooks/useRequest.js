const { REACT_APP_BASE_URL } = process.env;

const useRequest = () => {
   const request = ({ url, method = "GET", body = {}, token }) => {
      fetch(`${REACT_APP_BASE_URL}${url}`);
   };
};

export default useRequest;

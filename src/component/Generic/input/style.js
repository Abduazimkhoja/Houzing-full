// import { css, styled } from "styled-components";

// const filter = (props) => {
//    return {
//       gray: css`
//          width: 200px;
//          height: 44px;

//          padding: 0 16px;

//          color: var(--color-cyan-blue);
//          border: 1px solid var(--color-white-lilac);
//       `,

//       default: css`
//          width: 100%;
//          padding: 4px 8px 4px 0;
//          color: var(--color-cyan-blue);
//          border-bottom: 2px solid var(--color-white-lilac);
//          transition: border-color .3s ease;

//          &:hover,
//          &:focus {
//             border-color: var(--color-blue);
//          }

//          &::placeholder {
//             color: var(--color-gray);
//          }
//       `,
//    }[props.view || "default"];
// };

// export const Position = styled.div`
//    height: 30px;
//    position: relative;

//    &:focus-within {
//       & label {
//          top: -10px;
//       }
//    }
// `;

// export const InputStyle = styled.input`
//    width: 100%;
//    height: 100%;
//    padding: 4px 8px 4px 0;

//    display: flex;
//    align-items: center;

//    border-radius: 2px;
//    border-bottom: 2px solid var(--color-white-lilac);

//    font-size: 14px;
//    color: var(--color-cyan-blue);

//    transition: border-color 0.3s ease;

//    &:hover,
//    &:focus { 
//       border-color: var(--color-blue);
//    } 

//    ${(props) => console.log(props.status)}
// `;

// export const PlaceholderLabel = styled.label`
//    position: absolute;
//    top: 8px; 
//    font-size: 14px;

//    transition: top 0.2s ease;
// `;

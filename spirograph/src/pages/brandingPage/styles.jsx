import styled, { keyframes } from "styled-components";

export const ImageContainerFull = styled.img`
  //ㅎ화면에 따라 크기 조절하고 싶으면?
  //만약 75vw면 화면 width 3/4가 채워짐
  width: 100vw;
  height: auto;
  /* background-size: cover; */
  /* object-fit: cover; */
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;

export const ImageContainerSm = styled.img`
  //ㅎ화면에 따라 크기 조절하고 싶으면?
  //만약 75vw면 화면 width 3/4가 채워짐
  width: 60vw;
  height: auto;
  /* background-size: cover; */
  /* object-fit: cover; */
  @media only screen and (max-width: 500px) {
    width: 50vw;
  }
  @media only screen and (max-height: 900px) {
    height: 100vw;
  }
`;

export const FirstPage = styled.div`
  width: 100vw;
  height: 100%;
  background: var(--gray-95, #000);
  margin-bottom: 50vh;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;

export const SecondPage = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 18.19rem;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;
export const ThirdPage = styled.div`
  width: 100%;
  height: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-evenly; */

  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;

export const ThirdPerAni = styled.img`
  width: 15vw;
  height: 15vw;
  mix-blend-mode: plus-lighter;
  @media only screen and (max-width: 500px) {
    width: 20vw;
  }
  @media only screen and (max-height: 900px) {
    height: 20vw;
  }
`;
export const ThirdT = styled.span`
  font-size: 1vw;

  @media only screen and (max-width: 500px) {
    font-size: 3vw;
  }
`;
export const FourthPage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 18.19rem;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;
export const FifthPage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 18.19rem;
`;
export const SixthPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;
// 문명의 발전
export const SeventhPage = styled.div`
  width: 100vw;
  //요소가 두개면 200vh
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
  margin-bottom: 18.19rem;
`;
//인류사 발명품
export const EighthPage = styled.div``;

//상징의 발전
export const NinethPage = styled.div``;
//산업혁명
export const TenthPage = styled.div``;
//AI 발전 그라데이션
export const EleventhPage = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.3);

  /* 
  background: conic-gradient(
    from 270deg at 50% 50%,
    #6a25ff 0deg,
    #f523ed 158.389892578125deg,
    #0043f1 234.94101762771606deg,
    #401699 360deg
  );
  filter: blur(20rem); */

  @media only screen and (max-width: 500px) {
    width: 390px;
  }
`;
export const HugeT = styled.div`
  font-size: 7vw;
  color: #fff;
  text-align: center;
  margin-left: 1rem;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;

export const SmallT = styled.div`
  font-size: 1vw;
  color: #fff;
  text-align: start;
  margin-right: 3rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20vw;
`;
export const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
  `;
export const GradientT = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4vw;
  @media only screen and (max-width: 500px) {
    font-size: 5vw;
  }
  line-height: 180%; /* 5.85rem */
  font-weight: 800;
  color: black;
  visibility: visible;
  /* Text에만 배경 그라데이션 효과를 적용 */
  background: linear-gradient(180deg, #fff 0%, #4d4d4d 100%);
  /* 배경 그라데이션 효과가 텍스트 위에 오버레이되도록 */
  -webkit-background-clip: text;
  background-clip: text;
  /* 텍스트의 배경을 투명으로 */
  color: transparent;
  letter-spacing: -0.0975rem;
  animation: ${fadeInUp} 1s ease-in-out; // 키 프레임 애니메이션 적용

  animation-duration: 1s;
  animation-name: fadeInUp;
  /* transition: opacity 3s all ease-in-out; */
  /* transition: opacity 0.3s ease-in-out; // opacity에 대한 transition을 추가합니다.
 */
`;

export const Horizon = styled.div`
  // display: "block",

  width: 100vw;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;

  border-bottom: 1px solid #646464;
`;
export const TwelvePage = styled.div`
  width: 100%;
  height: 100%;
  //window 크기 다 채우는 거
  //background-size:cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: flex-start;
  margin-bottom: 18.19rem;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;
export const TextGradientPurple = styled.span`
  background: linear-gradient(99deg, #c7acff 2.03%, #6a25ff 92.54%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-family: bold;
  font-size: 10rem;
  @media only screen and (max-width: 500px) {
    font-size: 2.6rem;
  }
`;
export const TextGradientGray = styled.span`
  color: #848484;
  font-family: bold;
  font-size: 6rem;
  @media only screen and (max-width: 500px) {
    font-size: 1.56rem;
  }
`;

export const ThirteenPage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: flex-start;
  margin-bottom: 18.19rem;
`;
export const DivWrapper = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
`;
export const BrandEssence = styled.span`
  color: #f1f1f1;
  font-family: bold;
  font-size: 3vh;
  margin-bottom: 1.2vh;
  margin-top: 3vh;
`;
export const UnderBrandEssence = styled.span`
  color: #c7c7c7;
  font-family: bold;
  font-size: 1vh;
`;

export const FourteenPage = styled.div``;

export const flowText = keyframes`
     0%{
        transform: translateX(100%);
      }
      100%{
        transform: translateX(-100%);
      }
`;

export const BrandVisionT = styled.div`
  flex: 1; // Flexbox에서 공간을 차지하도록 설정
  text-align: left; // 왼쪽 정렬
  color: #6a25ff;
  font-size: 4vw;

  /* color적용 안되다가 위에 flex,text-align 추가하니까 됐다..
  뭐 때문인지는 정확히 모륵겠다; */
`;

export const BrandVisionT2 = styled.div`
  flex: 1; // Flexbox에서 공간을 차지하도록 설정
  text-align: right; // 오른쪽 정렬
  color: black;
  font-size: 1vw;
`;

export const TestAnimation = styled.div`
  white-space: nowrap;
  overflow: hidden;
  display: flex; // inline-block 대신 flex 사용
  background-color: #fff;
  width: 100vw;
  height: 50vh;
`;

export const AnimatedText = styled.span`
  display: inline-block; // 텍스트를 블록 요소로
  animation: ${flowText} 10s linear infinite;
  color: #000;
  font-size: 10vw;

  width: 100vw;
  margin-top: 9rem;
  //text를 맨 밑으로
  align-self: end;
`;

export const FifteenPage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 18.19rem;
`;

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState, SetStateAction } from "react";
import styled from "styled-components";
import FirstAppBox from "./firstAppBox";
import { IToParent } from "./indexExtraWrap";

export default function IndexWrapper1({ setSharedParent }: IToParent) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [sharedState, setSharedState] = useState<SetStateAction<string>>();
  useEffect(() => {
    setSharedParent(sharedState);
  }, [setSharedParent, setSharedParent, sharedState]);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted && (
      <>
        <AnimatePresence>
          <Wrapper1 className="flex w-full flex-col items-center ">
            <WrapPart1 className="mt-3 flex items-center justify-between space-x-[6rem]">
              <FirstAppBox
                widValue="4rem"
                heiValue="4rem"
                roundVal="100%"
                appName="Cart"
                bgColor="#eab308"
                clicked={() =>
                  router.push(`/cloneCoding/firstApps/Cart`, undefined, {
                    scroll: false,
                  })
                }
                setSharedState={setSharedState}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="transparent"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="#3C4048"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </FirstAppBox>
              <FirstAppBox
                widValue="4rem"
                heiValue="4rem"
                roundVal="100%"
                appName="ToDo"
                bgColor="#eab308"
                clicked={() =>
                  router.push(`/cloneCoding/firstApps/ToDo`, undefined, {
                    scroll: false,
                  })
                }
                setSharedState={setSharedState}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-6 w-6"
                  fill="#3C4048"
                >
                  <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
                </svg>
              </FirstAppBox>
            </WrapPart1>
            <WrapPart2 className="mt-5 flex items-center justify-between space-x-[21.5rem]">
              <FirstAppBox
                widValue="4rem"
                heiValue="4rem"
                roundVal="100%"
                appName="Paint"
                bgColor="#eab308"
                clicked={() =>
                  router.push(`/cloneCoding/firstApps/Paint`, undefined, {
                    scroll: false,
                  })
                }
                setSharedState={setSharedState}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-6 w-6"
                  fill="#3C4048"
                >
                  <path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm0-96c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zM288 96c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z" />
                </svg>
              </FirstAppBox>
              <FirstAppBox
                widValue="4rem"
                heiValue="4rem"
                roundVal="100%"
                appName="Jobs"
                bgColor="#eab308"
                clicked={() =>
                  router.push(`/cloneCoding/firstApps/Jobs`, undefined, {
                    scroll: false,
                  })
                }
                setSharedState={setSharedState}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-6 w-6"
                  stroke="#f97316"
                  fill="#3C4048"
                >
                  <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" />
                </svg>
              </FirstAppBox>
            </WrapPart2>
            <WrapPart3 className="mt-14 flex items-center justify-between space-x-[30rem] ">
              <FirstAppBox
                widValue="4rem"
                heiValue="4rem"
                roundVal="100%"
                appName="CoinTracker"
                bgColor="#eab308"
                clicked={() =>
                  router.push(`/cloneCoding/thirdApp/CoinsTracker`, undefined, {
                    scroll: false,
                  })
                }
                setSharedState={setSharedState}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-9 w-9 p-1 "
                  fill="#3C4048"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z" />
                </svg>
              </FirstAppBox>
              <FirstAppBox
                widValue="4rem"
                heiValue="4rem"
                roundVal="100%"
                appName="당근마켓"
                bgColor="#eab308"
                clicked={() =>
                  router.push(`/cloneCoding/secApps/Carrot`, undefined, {
                    scroll: false,
                  })
                }
                setSharedState={setSharedState}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="-mt-1 h-10 w-11 p-1"
                  fill="#3C4048"
                >
                  <path d="M346.7 6C337.6 17 320 42.3 320 72c0 40 15.3 55.3 40 80s40 40 80 40c29.7 0 55-17.6 66-26.7c4-3.3 6-8.2 6-13.3s-2-10-6-13.2c-11.4-9.1-38.3-26.8-74-26.8c-32 0-40 8-40 8s8-8 8-40c0-35.7-17.7-62.6-26.8-74C370 2 365.1 0 360 0s-10 2-13.3 6zM244.6 136c-40 0-77.1 18.1-101.7 48.2l60.5 60.5c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-55.3-55.3 0 .1L2.2 477.9C-2 487-.1 497.8 7 505s17.9 9 27.1 4.8l134.7-62.4-52.1-52.1c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L199.7 433l100.2-46.4c46.4-21.5 76.2-68 76.2-119.2C376 194.8 317.2 136 244.6 136z" />
                </svg>
              </FirstAppBox>
            </WrapPart3>
          </Wrapper1>
        </AnimatePresence>
      </>
    )
  );
}

const Wrapper1 = styled.div``;
const WrapPart1 = styled.div``;
const WrapPart2 = styled.div``;
const WrapPart3 = styled.div``;

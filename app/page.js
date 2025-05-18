"use client";
import { useRef } from "react";
import ItemSkill from "./components/ItemSkill";
import { motion } from "motion/react";
import Image from "next/image";

export default function Home() {
  const navbarRef = useRef();
  const abtmeRef = useRef();
  const skillRef = useRef();
  const finalProjectRef = useRef();
  const bannerRef = useRef();

  const onClickMenu = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    
    <div className="relative pb-10 scroll-smooth" ref={bannerRef}>
      <div
        ref={navbarRef}
        className="navbar shadow-md bg-base-100shadow-sm duration-300 ease-in-out mx-auto transition-all bg-white dark:bg-slate-900 flex-none fixed top-0 z-40"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a onClick={() => onClickMenu(abtmeRef)}>About me </a>
              </li>
              <li>
                <a onClick={() => onClickMenu(skillRef)}>Skill</a>
              </li>
              <li>
                <a onClick={() => onClickMenu(finalProjectRef)}>
                  Final project
                </a>
              </li>
            </ul>
          </div>
          <a
            className="btn btn-ghost text-xl font-urban"
            onClick={() => onClickMenu(bannerRef)}
          >
            Natpimon
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a onClick={() => onClickMenu(abtmeRef)}>About me</a>
            </li>
            <li>
              <a onClick={() => onClickMenu(skillRef)}>Skill</a>
            </li>
            <li>
              <a onClick={() => onClickMenu(finalProjectRef)}>Final project</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Button</a> */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.26534 3.25728C5.54121 1.98143 7.69866 2.37266 8.4453 4.01527L10.0666 7.58207C10.4662 8.46115 10.3393 9.47941 9.7603 10.2298C9.57069 10.4755 9.33228 10.6266 9.14342 10.7234L6.34328 12.1589C7.02276 13.246 7.83521 14.2739 8.78072 15.2194C9.72626 16.1649 10.7541 16.9774 11.8412 17.6569L13.2768 14.8567C13.3736 14.6679 13.5247 14.4295 13.7704 14.2399C14.5208 13.6608 15.539 13.534 16.4181 13.9336L19.9849 15.5549C21.6275 16.3015 22.0187 18.459 20.7429 19.7348L19.6747 20.803C19.1484 21.3293 18.3886 21.603 17.6192 21.4643C13.993 20.8106 10.5219 19.0819 7.72006 16.28C4.91826 13.4782 3.18949 10.0071 2.53579 6.38098C2.39708 5.61151 2.6708 4.85172 3.19715 4.32541C3.19715 4.32541 3.19715 4.32541 3.19715 4.32541M4.26534 3.25728C4.26533 3.25729 4.26534 3.25728 4.26534 3.25728V3.25728ZM13.148 18.3959C14.656 19.1633 16.2534 19.694 17.8853 19.9881C18.1347 20.0331 18.4082 19.9481 18.614 19.7424L19.6822 18.6742C20.2175 18.1389 20.0534 17.2337 19.3642 16.9204L15.7974 15.2991C15.4288 15.1316 15.0014 15.1846 14.6867 15.4274C14.6868 15.4274 14.6869 15.4273 14.6867 15.4274C14.6855 15.4284 14.6781 15.4349 14.6657 15.4513C14.6513 15.4704 14.6332 15.499 14.6116 15.5411L13.148 18.3959ZM5.60427 10.8522L8.4591 9.38858C8.50118 9.367 8.52978 9.34884 8.54888 9.33445C8.56744 9.32046 8.57309 9.31298 8.57276 9.31341C8.81555 8.99879 8.86856 8.57137 8.70102 8.20278L7.07975 4.63597C6.76648 3.94679 5.86129 3.78265 5.32598 4.31796L4.25778 5.3861C4.05198 5.59188 3.96702 5.86538 4.01199 6.11487C4.30617 7.74671 4.83685 9.34411 5.60427 10.8522Z"
              fill="#323544"
            />
            <path
              d="M3.19715 4.32541L4.26534 3.25728L3.19715 4.32541Z"
              fill="#323544"
            />
          </svg>

          <p> 0615392942</p>
        </div>
      </div>
      <div className="banner bg-[#FFFCE1] h-screen px-3 pt-20 p-9">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.4 },
          }}
          viewport={{ once: true }}
          className="flex flex-col-reverse container mx-auto justify-center items-center h-full lg:flex-row"
        >
          <div className=" lg:flex-1 text-center lg:text-left wrap-anywhere">
            <h1 className="text-6xl font-urban">
              Hi, I&apos;m <span className="font-medium">Natpimon</span>{" "}
            </h1>
            <button
              className="btn bg-amber-300 text-white mt-3 border-none"
              onClick={() => onClickMenu(abtmeRef)}
            >
              about me
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(180 0 0)"
              >
                <path
                  d="M14.1085 9.28033C14.4013 8.98744 14.4013 8.51256 14.1085 8.21967C13.8156 7.92678 13.3407 7.92678 13.0478 8.21967L9.79779 11.4697C9.5049 11.7626 9.5049 12.2374 9.79779 12.5303L13.0478 15.7803C13.3407 16.0732 13.8156 16.0732 14.1085 15.7803C14.4013 15.4874 14.4013 15.0126 14.1085 14.7197L11.3888 12L14.1085 9.28033Z"
                  fill="#ffffff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.3281 2C6.80528 2 2.32812 6.47715 2.32812 12C2.32812 17.5228 6.80528 22 12.3281 22C17.851 22 22.3281 17.5228 22.3281 12C22.3281 6.47715 17.851 2 12.3281 2ZM3.82812 12C3.82812 7.30558 7.6337 3.5 12.3281 3.5C17.0225 3.5 20.8281 7.30558 20.8281 12C20.8281 16.6944 17.0225 20.5 12.3281 20.5C7.6337 20.5 3.82812 16.6944 3.82812 12Z"
                  fill="#ffffff"
                />
              </svg>
            </button>
          </div>
          <div className="min-h-0 box-border w-full lg:h-full lg:flex-1 sm:p-0">
            <Image
              src="/myAvatar.png"
              alt="myAvatar.png"
              width={1000} 
              height={1000}
              className="w-full h-full lg:w-auto object-contain "
            />
          </div>
          <div className="p-1 flex flex-row gap-2 lg:flex-col lg:p-5">
            <a href="https://github.com/npmxm" target="_blank">
              <svg
                className="border-2 border-[#8B7F7C] rounded-xl bg-transparent hover:bg-[#8B7F7C] transition duration-250 ease-in-out"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0 0 0)"
              >
                <path
                  d="M12 2.24902C6.51613 2.24902 2 6.70064 2 12.249C2 16.6361 4.87097 20.3781 8.87097 21.7329C9.3871 21.8297 9.54839 21.5071 9.54839 21.2813C9.54839 21.0555 9.54839 20.4103 9.51613 19.5393C6.74194 20.1845 6.16129 18.1845 6.16129 18.1845C5.70968 17.0555 5.03226 16.7329 5.03226 16.7329C4.12903 16.0877 5.06452 16.0877 5.06452 16.0877C6.06452 16.12 6.6129 17.12 6.6129 17.12C7.48387 18.6684 8.96774 18.2168 9.51613 17.9264C9.6129 17.2813 9.87097 16.8297 10.1613 16.5716C7.96774 16.3458 5.6129 15.4748 5.6129 11.6684C5.6129 10.5716 6.03226 9.70064 6.64516 9.02322C6.54839 8.79741 6.19355 7.76515 6.74194 6.37806C6.74194 6.37806 7.6129 6.11999 9.51613 7.41031C10.3226 7.18451 11.1613 7.05548 12.0323 7.05548C12.9032 7.05548 13.7742 7.15225 14.5484 7.41031C16.4516 6.15225 17.2903 6.37806 17.2903 6.37806C17.8387 7.73289 17.5161 8.79741 17.3871 9.02322C18.0323 9.70064 18.4194 10.6039 18.4194 11.6684C18.4194 15.4748 16.0645 16.3458 13.871 16.5716C14.2258 16.8942 14.5484 17.5393 14.5484 18.4426C14.5484 19.7974 14.5161 20.8619 14.5161 21.1845C14.5161 21.4426 14.7097 21.7329 15.1935 21.6361C19.129 20.3135 22 16.6039 22 12.1845C21.9677 6.70064 17.4839 2.24902 12 2.24902Z"
                  fill="#5f5753"
                />
              </svg>
            </a>
            <a href="https://line.me/ti/p/TR0TzRwZQG" target="_blank">
              <svg
                className="border-2 border-[#8B7F7C] rounded-xl bg-transparent hover:bg-[#8B7F7C] transition duration-250 ease-in-out"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0 0 0)"
              >
                <path
                  d="M22 10.6222C22 6.13836 17.4839 2.46094 12 2.46094C6.51613 2.46094 2 6.1061 2 10.6222C2 14.6222 5.54839 17.9771 10.3548 18.6222C10.6774 18.6545 11.129 18.848 11.2258 19.1061C11.3226 19.3319 11.2581 19.7513 11.2581 20.0093C11.2581 20.0093 11.129 20.7513 11.129 20.8803C11.0968 21.1061 10.9355 21.8803 12 21.3642C13.0323 20.9126 17.7419 17.9448 19.871 15.5577C21.3226 14.0093 22 12.3964 22 10.6222ZM8.45161 12.9771C8.45161 13.0738 8.35484 13.1706 8.25806 13.1706H5.45161C5.41935 13.1706 5.35484 13.1384 5.32258 13.1384C5.29032 13.1061 5.29032 13.0416 5.29032 13.0093V8.62223C5.29032 8.52546 5.3871 8.42868 5.48387 8.42868H6.16129C6.25806 8.42868 6.35484 8.52546 6.35484 8.62223V12.0738H8.25806C8.35484 12.0738 8.45161 12.1706 8.45161 12.2674V12.9771ZM10.129 12.9771C10.129 13.0738 10.0323 13.1706 9.93548 13.1706H9.25806C9.16129 13.1706 9.06452 13.0738 9.06452 12.9771V8.62223C9.06452 8.52546 9.16129 8.42868 9.25806 8.42868H9.93548C10.0323 8.42868 10.129 8.52546 10.129 8.62223V12.9771ZM15 12.9771C15 13.0738 14.9032 13.1706 14.8065 13.1706H14.129C14.0968 13.1706 14.0968 13.1706 14.0968 13.1706C14.0645 13.1706 14.0645 13.1384 14.0645 13.1384L12 10.4287V13.0093C12 13.1061 11.9032 13.2029 11.8065 13.2029H11.129C11.0323 13.2029 10.9355 13.1061 10.9355 13.0093V8.65449C10.9355 8.55772 11.0323 8.46094 11.129 8.46094H11.8065C11.8065 8.46094 11.8065 8.46094 11.8387 8.4932L13.8387 11.1706V8.58997C13.8387 8.4932 13.9355 8.39642 14.0323 8.39642H14.8065C14.9032 8.39642 15 8.4932 15 8.58997V12.9771ZM18.871 9.33191C18.871 9.42868 18.7742 9.52546 18.6774 9.52546H16.7742V10.2674H18.6774C18.7742 10.2674 18.871 10.3642 18.871 10.4609V11.1384C18.871 11.2351 18.7742 11.3319 18.6774 11.3319H16.7742V12.0093H18.6774C18.7742 12.0093 18.871 12.1061 18.871 12.2029V12.8803C18.871 12.9771 18.7742 13.0738 18.6774 13.0738H15.871C15.8387 13.0738 15.7742 13.0416 15.7419 13.0416C15.7097 13.0093 15.7097 12.9448 15.7097 12.9126V8.55772C15.7097 8.52546 15.7419 8.46094 15.7419 8.42868C15.7742 8.39642 15.8387 8.39642 15.871 8.39642H18.6774C18.7742 8.39642 18.871 8.4932 18.871 8.58997V9.33191Z"
                  fill="#5f5753"
                />
              </svg>
            </a>
            <a href="mailto:natpimon.mu@gmail.com" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                className="p-0.5 main-grid-item-icon mr-2 border-2 border-[#8B7F7C] rounded-xl bg-transparent hover:bg-[#8B7F7C] transition duration-250 ease-in-out"
                fill="none"
                stroke="#5f5753"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.4"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto mt-9 px-3">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.3, duration: 0.4 },
          }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl scroll-mt-24" ref={abtmeRef}>
            About Me
          </h1>
          <div className="card mt-5 lg:card-side bg-base-100 shadow-sm max-h-[80vh] lg:max-h-[70vh]">
            <figure
              className="flex-1"
              style={{ alignItems: "unset !important;" }}
            >
              <Image
              src="/myPicVerIllust.png"
              alt="myPicVerIllust.png"
              width={1000} 
              height={1000}
              className="object-[0_20%] object-cover"
            />
            </figure>
            <div className="card-body flex-1">
              <div>
                <p>
                  ฉันชื่อ ณัฐพิมล เมืองวุฒทานันท์
                  จบการศึกษาจากมหาวิทยาลัยขอนแก่น คณะวิทยาลัยการคอมพิวเตอร์
                  สาขาเทคโนโลยีสารสนเทศ ในปีพ.ศ. 2567 มีทักษะด้าน Front-end
                  Development
                  ฉันชื่นชอบการออกแบบและสร้างประสบการณ์ที่ดีให้กับผู้ใช้งานเว็บไซต์
                  ในระหว่างอยู่ในการศึกษา
                  การทำโปรเจกต์ต่างๆฉันทำงานในส่วนอื่นๆด้วยในส่วนของ back-end
                  แม้ฉันจะได้รับหน้าที่เฉพาะส่วนไม่ใช่หน้าที่หลัก
                  แต่ฉันพร้อมเรียนรู้สิ่งใหม่ๆ ฉันยังไม่มีประสบการณ์ทำงานจริง
                  แต่พร้อมเรียนรู้และพัฒนาตัวเอง{" "}
                </p>
                <br />
                <br />
                <div className="flex flex-col flex-wrap gap-2">
                  <span className="flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.26534 3.25728C5.54121 1.98143 7.69866 2.37266 8.4453 4.01527L10.0666 7.58207C10.4662 8.46115 10.3393 9.47941 9.7603 10.2298C9.57069 10.4755 9.33228 10.6266 9.14342 10.7234L6.34328 12.1589C7.02276 13.246 7.83521 14.2739 8.78072 15.2194C9.72626 16.1649 10.7541 16.9774 11.8412 17.6569L13.2768 14.8567C13.3736 14.6679 13.5247 14.4295 13.7704 14.2399C14.5208 13.6608 15.539 13.534 16.4181 13.9336L19.9849 15.5549C21.6275 16.3015 22.0187 18.459 20.7429 19.7348L19.6747 20.803C19.1484 21.3293 18.3886 21.603 17.6192 21.4643C13.993 20.8106 10.5219 19.0819 7.72006 16.28C4.91826 13.4782 3.18949 10.0071 2.53579 6.38098C2.39708 5.61151 2.6708 4.85172 3.19715 4.32541C3.19715 4.32541 3.19715 4.32541 3.19715 4.32541M4.26534 3.25728C4.26533 3.25729 4.26534 3.25728 4.26534 3.25728V3.25728ZM13.148 18.3959C14.656 19.1633 16.2534 19.694 17.8853 19.9881C18.1347 20.0331 18.4082 19.9481 18.614 19.7424L19.6822 18.6742C20.2175 18.1389 20.0534 17.2337 19.3642 16.9204L15.7974 15.2991C15.4288 15.1316 15.0014 15.1846 14.6867 15.4274C14.6868 15.4274 14.6869 15.4273 14.6867 15.4274C14.6855 15.4284 14.6781 15.4349 14.6657 15.4513C14.6513 15.4704 14.6332 15.499 14.6116 15.5411L13.148 18.3959ZM5.60427 10.8522L8.4591 9.38858C8.50118 9.367 8.52978 9.34884 8.54888 9.33445C8.56744 9.32046 8.57309 9.31298 8.57276 9.31341C8.81555 8.99879 8.86856 8.57137 8.70102 8.20278L7.07975 4.63597C6.76648 3.94679 5.86129 3.78265 5.32598 4.31796L4.25778 5.3861C4.05198 5.59188 3.96702 5.86538 4.01199 6.11487C4.30617 7.74671 4.83685 9.34411 5.60427 10.8522Z"
                        fill="#323544"
                      />
                      <path
                        d="M3.19715 4.32541L4.26534 3.25728L3.19715 4.32541Z"
                        fill="#323544"
                      />
                    </svg>
                    0615392942
                  </span>
                  <span className="flex wrap-anywhere">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="main-grid-item-icon mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    natpimon.mu@gmail.com
                  </span>
                  <span className="flex">
                    <svg
                      className="mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 10.6222C22 6.13836 17.4839 2.46094 12 2.46094C6.51613 2.46094 2 6.1061 2 10.6222C2 14.6222 5.54839 17.9771 10.3548 18.6222C10.6774 18.6545 11.129 18.848 11.2258 19.1061C11.3226 19.3319 11.2581 19.7513 11.2581 20.0093C11.2581 20.0093 11.129 20.7513 11.129 20.8803C11.0968 21.1061 10.9355 21.8803 12 21.3642C13.0323 20.9126 17.7419 17.9448 19.871 15.5577C21.3226 14.0093 22 12.3964 22 10.6222ZM8.45161 12.9771C8.45161 13.0738 8.35484 13.1706 8.25806 13.1706H5.45161C5.41935 13.1706 5.35484 13.1384 5.32258 13.1384C5.29032 13.1061 5.29032 13.0416 5.29032 13.0093V8.62223C5.29032 8.52546 5.3871 8.42868 5.48387 8.42868H6.16129C6.25806 8.42868 6.35484 8.52546 6.35484 8.62223V12.0738H8.25806C8.35484 12.0738 8.45161 12.1706 8.45161 12.2674V12.9771ZM10.129 12.9771C10.129 13.0738 10.0323 13.1706 9.93548 13.1706H9.25806C9.16129 13.1706 9.06452 13.0738 9.06452 12.9771V8.62223C9.06452 8.52546 9.16129 8.42868 9.25806 8.42868H9.93548C10.0323 8.42868 10.129 8.52546 10.129 8.62223V12.9771ZM15 12.9771C15 13.0738 14.9032 13.1706 14.8065 13.1706H14.129C14.0968 13.1706 14.0968 13.1706 14.0968 13.1706C14.0645 13.1706 14.0645 13.1384 14.0645 13.1384L12 10.4287V13.0093C12 13.1061 11.9032 13.2029 11.8065 13.2029H11.129C11.0323 13.2029 10.9355 13.1061 10.9355 13.0093V8.65449C10.9355 8.55772 11.0323 8.46094 11.129 8.46094H11.8065C11.8065 8.46094 11.8065 8.46094 11.8387 8.4932L13.8387 11.1706V8.58997C13.8387 8.4932 13.9355 8.39642 14.0323 8.39642H14.8065C14.9032 8.39642 15 8.4932 15 8.58997V12.9771ZM18.871 9.33191C18.871 9.42868 18.7742 9.52546 18.6774 9.52546H16.7742V10.2674H18.6774C18.7742 10.2674 18.871 10.3642 18.871 10.4609V11.1384C18.871 11.2351 18.7742 11.3319 18.6774 11.3319H16.7742V12.0093H18.6774C18.7742 12.0093 18.871 12.1061 18.871 12.2029V12.8803C18.871 12.9771 18.7742 13.0738 18.6774 13.0738H15.871C15.8387 13.0738 15.7742 13.0416 15.7419 13.0416C15.7097 13.0093 15.7097 12.9448 15.7097 12.9126V8.55772C15.7097 8.52546 15.7419 8.46094 15.7419 8.42868C15.7742 8.39642 15.8387 8.39642 15.871 8.39642H18.6774C18.7742 8.39642 18.871 8.4932 18.871 8.58997V9.33191Z"
                        fill="#323544"
                      />
                    </svg>
                    mint38950
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.3, duration: 0.4 },
          }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl mt-9 scroll-mt-24" ref={skillRef}>
            My Programming Skill
          </h1>
          <div className="mt-5 grid grid-cols-1 min-[390px]:grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-4">
            <ItemSkill
              picurl={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s"
              }
              name={"React"}
            />
            <ItemSkill
              picurl={
                "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png"
              }
              name={"HTML"}
            />
            <ItemSkill
              picurl={"https://coryrylan.com/assets/images/posts/types/css.svg"}
              name={"CSS"}
            />
            <ItemSkill
              picurl={"https://img.icons8.com/color/512/javascript.png"}
              name={"Javascript"}
            />
            <ItemSkill
              picurl={"https://www.svgrepo.com/show/303251/mysql-logo.svg"}
              name={"MySQL"}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.3, duration: 0.4 },
          }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl mt-9 scroll-mt-24" ref={finalProjectRef}>
            My Final Project
          </h1>
          <div className="mt-5">
            <h2 className="text-xl">
              เว็บแอปพลิเคชันบริการสำหรับจ้างงานศิลปะ{" "}
            </h2>
            <p>
              คือแพลตฟอร์มที่เป็นตัวกลางระหว่างนักวาดและผู้จ้าง
              โดยผู้จ้างสามารถจ้างหรือสั่งคอมมิชชันให้นักวาดได้
              มีฟังก์ชันที่ช่วยจัดการให้ทั้งสองฝ่ายทำการว่าจ้างได้สะดวกยิ่งขึ้น
            </p>
            <p className="mt-2">
              <span className="font-semibold">แรงบันดาลใจ :</span>{" "}
              เหตุผลที่เลือกทำโปรเจกต์นี้เพราะฉันชอบงานศิลปะ รักการวาดรูปมากๆ
              และอยากทำงานใหม่ๆที่มีความท้าทาย หัวข้อที่แปลกใหม่ไม่เหมือนใคร
              ฉันจึงเลือกหัวข้อนี้ มีอุปสรรคมากมายเพราะงานค่อนข้างยูนีค
              จึงต้องมุ่งเน้นศึกษาเองเป็นหลัก ในการออกแบบระบบนั้น
              เนื่องด้วยเป็นเว็บไซต์กรณีศึกษา จึงไม่ได้คิดค่าธรรมเนียมจากนักวาด
              ฝั่งเจ้าของเว็บไซต์จึงไม่ได้ผลกำไรอะไรเลย
            </p>
            <p>
              <span className="font-semibold">หน้าที่ของฉัน:</span>{" "}
              เว็บไซต์นี้มีผู้พัฒนาสองคน หน้าที่ของฉันคือการออกแบบระบบ
              ฐานข้อมูลและUX/UI การโค้ดดิ้งเป็น Full-stack developer
              แต่จะเน้นการทำงานที่หน้าบ้าน โดยรับหน้าที่ UI เป็นหลัก{" "}
            </p>
            <p>
              <span className="font-semibold">สร้างด้วย :</span> React, Node.js,
              Python{" "}
            </p>
            <p>
              <span className="font-semibold">เว็บไซต์ที่คล้ายคลึงกัน :</span>{" "}
              <a
                href="https://arbum.art/"
                target="_blank"
                className="underline hover:text-gray-500 transition duration-150"
              >
                Arbum
              </a>
              ,&nbsp;
              <a
                href="https://fastwork.co/"
                target="_blank"
                className="underline hover:text-gray-500 transition duration-150"
              >
                Fastwork
              </a>
              ,&nbsp;
              <a
                href="https://www.deviantart.com/"
                target="_blank"
                className="underline hover:text-gray-500 transition duration-150"
              >
                DeviantArt
              </a>
            </p>

            <p>
              <span className="font-semibold">User Manual : </span>
              <a
                href="IT-WEB17-UserManual.pdf"
                target="_blank"
                className="underline hover:text-gray-500 transition duration-150"
              >
                ดาวน์โหลด
              </a>
            </p>
            <p className="text-gray-700">
              หมายเหตุ :
              เวอร์ชันโปรเจกต์ที่ฉันมีอยู่ไม่มีในส่วนของการตรวจสอบรูปภาพซ้ำด้วยโครงข่ายประสาทเทียมที่เขียนด้วย
              Python(ฉันไม่ได้รับหน้าที่ในส่วนนี้) เนื่องจากปัญหาบางประการ
              ในส่วนอื่นๆยังคงทำงานได้เหมือนเดิม
            </p>
            <Image
              src="finalProjectWeb.png"
              alt="finalProjectWeb.png"
              width={1000} // กำหนดขนาดที่เหมาะสม
              height={1000}
              className="w-full rounded-2xl mt-4 object-contain bg-amber-100"
            />
            <Image
              src="/vdo.gif"
              alt="vdo.gif"
              width={1000} // กำหนดขนาดที่เหมาะสม
              height={1000}
              className="mt-4 w-full rounded-2xl "
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

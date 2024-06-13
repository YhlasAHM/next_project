"use client"
import React from 'react'

import { Progress } from 'antd';

const twoColors = {
  '0%': '#108ee9',
  '100%': '#87d068',
};


export default function Home() {

  /*   const Map = React.useMemo(() => dynamic(() => import("./components/map/Map"), {
      loading: () => <p>loading...</p>,
      ssr: false
    }), [])
   */

  return (
    <>
      <main className="text-white min-h-screen">
        <div className='pl-[13px] pr-[13px]'>
          <div className='flex justify-between h-[50px]'>
            <div className='flex gap-[10px] w-full items-center h-full'>
              <div> <img width={40} height={40} style={{ borderRadius: '100%' }} src='/hack.jpg' /> </div>
              <div className='flex flex-col w-full gap-1 justify-between'>
                <div className='profile_title'>Иван Иванов</div>
                <div className='flex items-center gap-1'>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 10C9.91625 10 11.875 8.04125 11.875 5.625C11.875 3.20876 9.91625 1.25 7.5 1.25C5.08376 1.25 3.125 3.20876 3.125 5.625C3.125 8.04125 5.08376 10 7.5 10ZM7.5 3.75C7.32244 3.75 7.20369 3.96303 6.96619 4.38907L6.90475 4.49929C6.83731 4.62036 6.80356 4.6809 6.75094 4.72084C6.69831 4.76078 6.63281 4.77561 6.50175 4.80526L6.38244 4.83226C5.92122 4.93661 5.69063 4.98878 5.63577 5.1652C5.58091 5.34162 5.73811 5.52545 6.05252 5.89311L6.13386 5.98823C6.22321 6.09271 6.26787 6.14494 6.288 6.20957C6.30806 6.27419 6.30131 6.34387 6.28781 6.48331L6.2755 6.61019C6.22798 7.10075 6.20421 7.346 6.34781 7.45506C6.4915 7.56406 6.70738 7.46469 7.13919 7.26587L7.25088 7.21444C7.37363 7.15794 7.43494 7.12969 7.5 7.12969C7.56506 7.12969 7.62637 7.15794 7.74912 7.21444L7.86081 7.26587C8.29262 7.46469 8.5085 7.56406 8.65219 7.45506C8.79581 7.346 8.772 7.10075 8.7245 6.61019L8.71219 6.48331C8.69869 6.34387 8.69194 6.27419 8.712 6.20957C8.73213 6.14494 8.77681 6.09271 8.86612 5.98824L8.9475 5.89311C9.26188 5.52545 9.41912 5.34162 9.36425 5.1652C9.30937 4.98878 9.07875 4.93661 8.61756 4.83226L8.49825 4.80526C8.36719 4.77561 8.30169 4.76078 8.24906 4.72084C8.19644 4.6809 8.16269 4.62036 8.09525 4.49929L8.03381 4.38907C7.79631 3.96303 7.67756 3.75 7.5 3.75Z" fill="url(#paint0_linear_58_2057)" />
                    <path d="M4.43313 9.96338L4.1964 10.8269C3.80369 12.2593 3.60733 12.9754 3.86936 13.3676C3.96119 13.5049 4.08437 13.6153 4.22732 13.688C4.63521 13.8957 5.265 13.5676 6.52456 12.9113C6.94369 12.6929 7.15325 12.5837 7.37587 12.5599C7.45844 12.5511 7.54156 12.5511 7.62412 12.5599C7.84675 12.5837 8.05631 12.6929 8.47544 12.9113C9.735 13.5676 10.3648 13.8957 10.7727 13.688C10.9156 13.6153 11.0388 13.5049 11.1306 13.3676C11.3927 12.9754 11.1963 12.2593 10.8036 10.8269L10.5669 9.96338C9.7005 10.5769 8.64237 10.9375 7.5 10.9375C6.35762 10.9375 5.29947 10.5769 4.43313 9.96338Z" fill="url(#paint1_linear_58_2057)" />
                    <defs>
                      <linearGradient id="paint0_linear_58_2057" x1="-1.25" y1="5.625" x2="7.5" y2="14.375" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#80F1A6" />
                        <stop offset="1" stop-color="#EFD000" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_58_2057" x1="-9.53674e-07" y1="11.8567" x2="3.0469" y2="17.8916" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#80F1A6" />
                        <stop offset="1" stop-color="#EFD000" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className='text-[10px] text-[#939393]'>Новичок </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-full justify-center items-end gap-2'>
              <div className='header_right'>Игроки: 3.072.900</div>
              <div className='header_right'>7.591.751 TAXI</div>
            </div>
          </div>
        </div>
        <div className='line_'></div>
        <div className='pl-[13px] mb-2 mt-3 h-full'>
          <div className='flex justify-between'>
            <div className='flex gap-1'>
              <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.50014 1.28125C7.75902 1.28125 7.96889 1.49112 7.96889 1.75V2.39779L11.0987 3.9627L11.1325 3.97957C11.5915 4.20904 11.9828 4.40464 12.255 4.59468C12.5311 4.78739 12.8214 5.06719 12.8214 5.5C12.8214 5.93281 12.5311 6.21261 12.255 6.40532C11.9828 6.59536 11.5915 6.79094 11.1325 7.02044L7.96889 8.60219V11.75C7.96889 12.0089 7.75902 12.2188 7.50014 12.2188C7.24127 12.2188 7.03139 12.0089 7.03139 11.75V8.32263C7.0312 8.31612 7.0312 8.30956 7.03139 8.30306V2.69693C7.0312 2.69041 7.0312 2.68388 7.03139 2.67734V1.75C7.03139 1.49112 7.24127 1.28125 7.50014 1.28125Z" fill="url(#paint0_linear_58_2041)" />
                <path d="M7.5 14.2501C10.9517 14.2501 13.75 13.2707 13.75 12.0626C13.75 11.0237 11.6809 10.154 8.90637 9.93073V11.7501C8.90637 12.5267 8.27675 13.1564 7.50012 13.1564C6.72344 13.1564 6.09385 12.5267 6.09385 11.7501V9.93066C3.31921 10.154 1.25 11.0237 1.25 12.0626C1.25 13.2707 4.04822 14.2501 7.5 14.2501Z" fill="url(#paint1_linear_58_2041)" />
                <path d="M7.50014 1.28125C7.24127 1.28125 7.03139 1.49112 7.03139 1.75V2.67734C7.0312 2.68388 7.0312 2.69041 7.03139 2.69693V8.30306C7.0312 8.30956 7.0312 8.31612 7.03139 8.32263V9.88106V11.75C7.03139 12.0089 7.24127 12.2188 7.50014 12.2188C7.75902 12.2188 7.96889 12.0089 7.96889 11.75V9.88106V8.60219L11.1325 7.02044C11.5915 6.79094 11.9828 6.59536 12.255 6.40532C12.5311 6.21261 12.8214 5.93281 12.8214 5.5C12.8214 5.06719 12.5311 4.78739 12.255 4.59468C11.9828 4.40464 11.5915 4.20904 11.1325 3.97957L7.96889 2.39779V1.75C7.96889 1.49112 7.75902 1.28125 7.50014 1.28125Z" fill="url(#paint2_linear_58_2041)" />
                <defs>
                  <linearGradient id="paint0_linear_58_2041" x1="9.92203" y1="-3.10115" x2="1.70643" y2="1.11085" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#33D2FF" />
                    <stop offset="0.537474" stop-color="#3D68DE" />
                    <stop offset="1" stop-color="#9845E8" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_58_2041" x1="7.49073" y1="8.19997" x2="4.96119" y2="15.2893" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#33D2FF" />
                    <stop offset="0.537474" stop-color="#3D68DE" />
                    <stop offset="1" stop-color="#9845E8" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_58_2041" x1="9.92203" y1="-3.10115" x2="1.70643" y2="1.11085" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#33D2FF" />
                    <stop offset="0.537474" stop-color="#3D68DE" />
                    <stop offset="1" stop-color="#9845E8" />
                  </linearGradient>
                </defs>
              </svg>
              <div className='level_header'>Уровень 1</div>
            </div>
            <div className='flex gap-1'>
              <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 1.75C4.04822 1.75 1.25 4.54822 1.25 8C1.25 11.4517 4.04822 14.25 7.5 14.25C10.9517 14.25 13.75 11.4517 13.75 8C13.75 4.54822 10.9517 1.75 7.5 1.75ZM7.01712 5.85565L5.75772 6.85856C5.22934 7.27931 4.96515 7.48975 5.01672 7.72462L5.01946 7.73625C5.07821 7.96969 5.4131 8.05944 6.08287 8.23894C6.45506 8.33862 6.64119 8.3885 6.7285 8.52956L6.73294 8.537C6.81719 8.67975 6.76925 8.85856 6.67344 9.21619L6.64837 9.30962C6.38269 10.3011 6.24987 10.7968 6.50569 10.9569C6.7615 11.117 7.16856 10.7929 7.98269 10.1446L9.24206 9.14169C9.77044 8.72094 10.0346 8.51056 9.98306 8.27562L9.98037 8.264C9.92156 8.03056 9.58669 7.94081 8.91694 7.76137C8.54475 7.66162 8.35862 7.61175 8.27131 7.47069L8.26687 7.46325C8.18262 7.3205 8.23056 7.14169 8.32637 6.78412L8.35144 6.69062C8.61706 5.69915 8.74994 5.20342 8.49406 5.04332C8.23825 4.88322 7.83119 5.20737 7.01712 5.85565Z" fill="url(#paint0_linear_58_2047)" />
                <defs>
                  <linearGradient id="paint0_linear_58_2047" x1="7.49073" y1="-3.25846" x2="-4.06715" y2="7.93481" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#33D2FF" />
                    <stop offset="0.537474" stop-color="#3D68DE" />
                    <stop offset="1" stop-color="#9845E8" />
                  </linearGradient>
                </defs>
              </svg>
              <div className='level_header'>0/12.416</div>
            </div>
          </div>
        </div>
        <div className='pl-[13px] pr-[13px] h-full w-full '>
          <div className='bg-[#2A2A2A] p-1 rounded-[12px]'>
            <Progress
              percent={89}
              percentPosition={{
                align: 'start',
                type: 'inner',
              }}
              size={[300, 30]}
              strokeColor={twoColors}
            />
          </div>
          <div className='flex w-full flex-col justify-between min-h-full'>
            <div className='mt-3 rounded-[12px] p-3 bg-[#2A2A2A] grid grid-cols-4 gap-[10px]'>
              {
                [1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                  <div key={item} className='col-span-1'>
                    <img src='/hack.jpg' width={100} height={100} />
                  </div>
                ))
              }
            </div>
            <div className='w-full flex flex-col gap-2 h-full mt-4'>
              <div className='main_btn_ btn_text_ w-full h-[39px] border-[1px]'>Закрепить картинку</div>
              <div className='flex w-full gap-2'>
                <div className=' w-1/2 btn_text_  h-[39px] border-[1px]' style={{ background: '#9845E8!important' }}>Заминтить</div>
                <div className=' w-1/2 btn_text_  h-[39px] border-[1px]'> Загрузить картинку</div>
              </div>
            </div>
          </div>
        </div>
      </main >
    </>
  );
}

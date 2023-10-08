import { Dialog } from "@headlessui/react";
import { useUser } from "@hooks/useUser";

export const LoginModal = () => {
  const { panelOpen, updatePanel } = useUser();
  return (
    <>
      {/* user */}
      <Dialog
        open={panelOpen}
        onClose={() => updatePanel(false)}
        className="relative z-[999]"
      >
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black/10"
          aria-hidden="true"
        />
        <div className="fixed top-0 left-0 right-0 bottom-0 w-screen overflow-y-auto">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center p-4">
            {/* The actual dialog panel  */}
            <Dialog.Panel className="mx-auto rounded relative bg-[rgba(29,30,37)] bg-[url(/images/auth/bg\_panel.png)] bg-no-repeat bg-[50%] bg-cover overflow-hidden w-full md:w-auto">
              <div className="text-center text-white w-[280px] min-w-[300px] box-content tracking-[3px] mx-auto my-0 px-[69px] py-9">
                {/* header */}
                <div className="flex items-center mb-4">
                  {/* logo */}
                  <div className="relative w-[52px] h-[52px] min-w-[50px] min-h-[50px] bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABWCAMAAACAVIq8AAAAsVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3mHKcAAAAOnRSTlMA7AXI+qZ7JObe2kwWEQnizYDzHhkNrSzXwrpaSD7RtnZkRLKSOjG+aVCil3BV9/CMNV8onYiEbZqPc5hM6gAAB1NJREFUWMOUledi4jAQhCcuOLjRTAuhHjWBJHCUZN7/wc4ry4RmfHw/wEJCWu3OjnGFX8ND1OrIwVvhIeYT5FCo4CG2HeTwZuMhekvk8FLCQ1gF5DAjHiFgJTdG1k7/MBnu7FnZLRaLbq9tf827Ps4Y5e/YZ5pq4/XLrPKSj/J4cSKYyv/saEOYjEvM4mk7gsbkHjn8YdUAnCLv01qGiImYH6NNroDgMkAr5uKXqaiXHCCHb9IEUP9kQrGx34yatcj3I2fqzcez53QiABAPhshhT3INYC1VaMybuCScFEySVSnPkKSX26cke4gZ9A4+Mmj+tKQ2xoc+/g4hPPL8Jsa0U9j+aZfLs8b7YOGc5zzGv1/oAv5SSFXuHBoXNXLtYTq5UunMqfM3jM/fdZs2b2E1JHf67BeE9xqQbdGsYNYR3NHkH6D2ROEL05aD27SluiF+qCjDuCdwGE9UdODxyc+IUPDQZYKPGTP5OS6rYUwWjVtOS0UDRjU9/IeZdKRbdMJlvYkrBkzw0mBpw2MmgU43v4Gd/j5nzYSu1nhM9U4iewj006s4WhL1OTrNCwAni9vMoJJe+hPC7lrpNhVLAFGEBhUmVswggjaSPRxfOkOJ4wQvzVzMcNF1jmXMvPQw3XrS2SBGGmtwdWcXMc62ZkW67jOMeZMRtB4G3ef127F/gss6/1XWY4L9iAlN3H4pYJk+lJ6ikrS5yusWGuNDt5Pw5hoWJ3sqnmXhNRMjrd2GZqCrXFTpTVjqqilaxdgq3EAb9Q6fvMJMtdj3yXagQ5EeekfCM08s0SoZ8XgwSgU/5RVGGnjUiC3DZx+CHGOFEEY6JQqfn0Y5Hh47cHrVinMvPc2RsGpsaV+XOcRo9enST8hQxBmirSW8MHnGW4ep1l7jz0MzjkHbtdZkaFGoH205OsQRhwZcXc/v5zMbe7dSaRlTEZJ3NPyJ9v6FtpyEQ5I6F+/jUO9kne2YDsqwV5Bc7pJ3l5b5AcC7tpyESrx5KIbap5h0JibAIURfLTGAhJ3ydvSUzxhI+CKtOCEuXqpArcgMXgBwDrJinNjOWhU4sJSyoNlKp6zjCZsA6hnms5U5dkD6K6nOSTc3tbkXTp28ARIV1vRFrlkmim76bKF1umND4p3r1tc0ZYQN0dWnLK6SWexqA4RHJxI1BCcGsceXSmOoU/uqCrVTOapqzb/wjO9kbUALbRcyucKmAsWrqNTmr1lu6KIuY3htlONJxbmlHY6v4i3cunRNCbDYhfa0mRwiNRdEsF301XghOv1Bwp5HVtqu4lVO0NVGuyQ/VIeEVfZQ/n2RldRe/zoz2+5EYSAKD6CA+FoUXRV1RVDr2x7F1rP5/z9sSbgJrEFr+3zqoZBMkpl7J8epNDA3m/C9Hzgip8CFKHAC5+LxjDRzYW2RoYJqZBF7ShptUSAUSN3IVcdnk8LMbfGRL54PiJzcsEfKRanHRTi3NqIAWkOuTOGZy5SIzFGqytUcLCp7aBeeMpYj2sVm3bKnciOCDwOzUCs/AjiWdxCfQ/rrhXNvmEGeHNGXqr1A92XyMY9XnsKOGCoVWnqa75siqyy5ExOEjRF7WLWU0b18gTUgAP3ITniFLbjYHRIY/dRQzUAPf6U87AZNcDJXPH7nL4DFu0kKZ0CK9rJ4aa8yweYnM6c6Kv+X7Av/86ru0EbnrTgf31Y+K9gIzYbcNNgmn2Clep0IuQCgnQW63f5BJyVO7sR2uVLM5TgN7rUaUbkp1EjUqfK43nI1O9Fa6ZTFdNYEpkxnL32A8bimUNyBIzvlPqvg1C5pXcWyExh5NmGKajj2ZUrZD2wFvUIVofxHO2aGdK44RW7hzDW2hFcrqKPua+c5G0p39cJaPluKt7zk7gwCbc0X/g1sbynO9yJmRjbZYvEtmQi9DlHisRIx9kcyTolGvkyvs8jHPbqzocjIicgdLNoVym8OWQlyWIk3aDRSu3Piud7DfkdiDB7ARH41Uv1AQRNnhlrNOeKQRSRujS1LJ8gn2SGB4QYQL+AWpuif7y5qR1zP0O0VVfJJlhjcJEXEdAyHJFgUDJDFqmtWLoLnJWZ6RjvabdKA/kDpiiBnI+hcmehJhKq1a4sh9tqNK/qtX+qx+4oaBgRY4HSJXZSEsKhFvpugUm+Sykv0jmfFVr8KWwbKVL8oA6QHKDKsa2U5r980QZ80rJJyAX1T2qRA9gODdDpwijnpnFXS33FjoEcVJPLKqjOQda9xVU6kg85nSpXxP/wKzj+kSjxclnUawkIrGUNINGAIpIOWrhtQNQtUdyX131RFsMkibNEDUO+LgF5m3cgS0aSHoODdiF7kIITnKRDEuPNSgGP0dU85e3mYW/qKVszrIaQvMWO44dakJww+fa4QbXqFBGXc/Vg/mrVZr/GiDOlVLp4syY9Qi6I/vXbFhDf6DkXL6Vs7+xKeR2k6SprLz6FsNA8mfZMZ7v5VGLuQfkKn+bd3YvfU8EvFT2lFt3hlea5hGK5nreJDNKDn/AN4B71Pmiy2uQAAAABJRU5ErkJggg==)] bg-no-repeat bg-[50%] bg-contain mr-7" />
                  <div className="flex flex-col text-[21px] items-start">
                    <div>SHADOWMOON</div>
                    <div>ACCOUNT</div>
                  </div>
                </div>
                {/* form */}
                <form className="flex flex-col space-y-7 w-full">
                  {/* phone */}
                  <div className="flex flex-col space-y-2 items-start">
                    <div className="text-[15px]">手机号：</div>
                    <div className="w-full border-b border-white">
                      <input
                        type="text"
                        className="w-full text-[15px] bg-transparent outline-none"
                        placeholder="请输入你的手机号"
                      />
                    </div>
                  </div>
                  {/* code */}
                  <div className="flex flex-col space-y-2 items-start">
                    <div className="text-[15px]">验证码：</div>
                    <div className="flex w-full items-center space-x-2">
                      <div className="w-full border-b border-white">
                        <input
                          type="text"
                          className="w-full text-[15px] bg-transparent outline-none"
                          placeholder="请输入你的验证码"
                        />
                      </div>
                      <div className="w-[90px] h-[30px] flex-shrink-0 border border-white text-xs flex justify-center items-center cursor-pointer hover:text-[#af9465] hover:border-[#af9465] transition-all">
                        <div>发送验证码</div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

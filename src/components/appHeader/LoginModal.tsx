import { Dialog } from "@headlessui/react";
import { useUser } from "@hooks/useUser";
import { useState } from "react";
import toast from "react-hot-toast";

export const LoginModal = () => {
  const {
    panelOpen,
    updatePanel,
    type,
    signOutEmail,
    signOutPhone,
    loginEmail,
    loginPhone,
  } = useUser();
  const [isRead, setIsRead] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState<"email" | "phone">("email");
  const [form, setForm] = useState({
    phoneNumber: undefined,
    email: undefined,
    password: undefined,
    username: undefined,
  });

  return (
    <>
      {/* user */}
      <Dialog
        open={panelOpen}
        onClose={() => updatePanel(false)}
        className="relative z-[999]"
      >
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black/50"
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
                  {type === "signOut" && (
                    <>
                      {/* username */}
                      <div className="flex flex-col space-y-2 items-start">
                        <div className="text-[15px]">用户名：</div>
                        <div className="w-full border-b border-white">
                          <input
                            type="text"
                            value={form.username}
                            className="w-full text-[15px] bg-transparent outline-none"
                            placeholder="请输入你的用户名"
                            onInput={(e) => {
                              // @ts-ignore
                              setForm({ ...form, username: e.target.value });
                            }}
                          />
                        </div>
                      </div>
                    </>
                  )}
                  {formType === "email" ? (
                    <>
                      {/* email */}
                      <div className="flex flex-col space-y-2 items-start">
                        <div className="text-[15px]">邮箱：</div>
                        <div className="w-full border-b border-white">
                          <input
                            type="text"
                            value={form.email}
                            className="w-full text-[15px] bg-transparent outline-none"
                            placeholder="请输入你的邮箱"
                            onInput={(e) => {
                              // @ts-ignore
                              setForm({ ...form, email: e.target.value });
                            }}
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* phone */}
                      <div className="flex flex-col space-y-2 items-start">
                        <div className="text-[15px]">手机号：</div>
                        <div className="w-full border-b border-white">
                          <input
                            type="text"
                            value={form.phoneNumber}
                            className="w-full text-[15px] bg-transparent outline-none"
                            placeholder="请输入你的手机号"
                            onInput={(e) => {
                              // @ts-ignore
                              setForm({ ...form, phoneNumber: e.target.value });
                            }}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* code */}
                  <div className="flex flex-col space-y-2 items-start">
                    <div className="text-[15px]">密码：</div>
                    <div className="flex w-full items-center space-x-2">
                      <div className="w-full border-b border-white">
                        <input
                          value={form.password}
                          className="w-full text-[15px] bg-transparent outline-none"
                          placeholder="请输入你的密码"
                          type='password'
                          onInput={(e) => {
                            // @ts-ignore
                            setForm({ ...form, password: e.target.value });
                          }}
                        />
                      </div>
                      {/* <div className="w-[90px] h-[30px] flex-shrink-0 border border-white text-xs flex justify-center items-center cursor-pointer hover:text-[#af9465] hover:border-[#af9465] transition-all">
                        <div>发送验证码</div>
                      </div> */}
                    </div>
                  </div>
                  {/* checkbox */}
                  <div className="w-full flex flex-col  space-y-2 text-xs leading-[1.5] tracking-normal">
                    <div className="w-full flex items-center  space-x-1.5">
                      <div
                        className="w-3 h-3 flex justify-center items-center border border-white cursor-pointer"
                        onClick={() => setIsRead(!isRead)}
                      >
                        {isRead && <div className="w-1.5 h-1.5 bg-white"></div>}
                      </div>
                      <div className="text-white flex items-center">
                        已阅读并同意
                        <span
                          className="text-white hover:text-[#af9465] cursor-pointer"
                          onClick={() => setIsOpen(true)}
                        >
                          《影之月网络用户注册协议》
                        </span>
                      </div>
                    </div>
                    {/* swith */}
                    <div
                      className="w-full text-xs leading-[1.5] tracking-normal text-white hover:text-[#af9465] text-left cursor-pointer"
                      onClick={() => {
                        setFormType(formType === "email" ? "phone" : "email");
                      }}
                    >
                      {formType === "email" ? "用手机号" : "用邮箱"}
                      {type === "login" ? "登录" : "注册"}
                    </div>
                  </div>

                  <div className="w-full h-10 flex justify-center items-center space-x-12 pt-5">
                    <div
                      className="w-[108px] h-10 border-white border text-xs flex justify-center items-center cursor-pointer hover:text-[#af9465] hover:border-[#af9465] transition-all"
                      onClick={() => {
                        updatePanel(false);
                      }}
                    >
                      <div>取消</div>
                    </div>
                    <div
                      className="w-[108px] h-10 border-white border text-xs flex justify-center items-center cursor-pointer hover:text-[#af9465] hover:border-[#af9465] transition-all"
                      onClick={() => {
                        if (isRead) {
                          if (formType === "email") {
                            if (type === "login") {
                              // email login
                              loginEmail(form);
                            } else {
                              // email register
                              signOutEmail(form)
                            }
                          } else {
                            if (type === "login") {
                              // phone login
                              loginPhone(form);
                            } else {
                              // phone register
                              signOutPhone(form)
                            }
                          }
                          updatePanel(false);
                        } else {
                          toast.error("请先阅读并同意用户协议");
                        }
                      }}
                    >
                      <div>{type === "login" ? "登录" : "注册"}</div>
                    </div>
                  </div>
                </form>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-[9999]"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div
          className="fixed top-0 right-0 bottom-0 left-0 bg-black/50"
          aria-hidden="true"
        />

        {/* Full-screen scrollable container */}
        <div className="fixed top-0 right-0 bottom-0 left-0 w-screen">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center p-4">
            {/* The actual dialog panel  */}
            <Dialog.Panel
              className="mx-auto w-[800px] h-[700px] max-h-[80vh] relative flex flex-col  overflow-y-auto"
              style={{
                backgroundImage: "url(/images/home/bg_1.webp)",
              }}
            >
              <h1 className="w-full text-center mb-[10px] mt-[50px] text-3xl">
                用户注册协议
              </h1>
              <div className="w-full flex flex-col px-10 py-5 text-sm">
                <p className="text-sm indent-[2rem]">
                  欢迎注册影月账号，为了保障您的合法权益，请在注册影月账号之前，详细阅读并理解本协议的所有内容，尤其是免除影之月责任、限制您的权利、法律适用和争议解决等条款。前述条款通常以红色字体显示以提请您注意，您对前述条款的确认可能会给您带来限制、不便或损失，请您在确认同意本协议之前再次认真阅读前述条款。
                </p>
                <p></p>
                <h2 className="text-2xl my-4">一、协议的确认与接受</h2>
                <ol>
                  <li>
                    1.1
                    本协议指本《影月用户注册协议》、《影月用户隐私权保护政策和个人信息利用政策》及本协议明确援引的其他协议、规则或通知。所有援引的前述内容均为本协议不可分割的组成部分，与本协议正文具有同等法律效力。本协议内容可由影之月通过发布公告、在页面显著位置提示或向您发送书面通知等合理方式不时更新和修改。
                  </li>
                  <li>
                    1.2
                    本协议是由您与上海影之月科技有限公司或其关联公司（以下简称“
                    <b>影之月</b>”）就您在影之月的账户系统注册账号（以下简称“
                    <b>影月账号</b>
                    ”）所订立的协议。本协议对协议双方均具有合同效力。除非另行明确约定，您注册和/或使用影月账号均受本协议约束。
                  </li>
                  <li>
                    1.3
                    若您希望注册或使用影月账号，则您必需首先阅读并同意本协议。您一旦点击“接受”、“同意”、“下一步”或具有同等含义的词语，或注册或开始使用影月账号，则视为您已阅读并同意本协议的所有条款，本协议由此正式生效。
                  </li>
                  <li>
                    1.4
                    影之月有权在必要时通过发布公告、在页面显著位置提示或向您发送书面通知等合理方式修改本协议。您在注册或使用影月账号时，应当及时查阅了解修改的内容，并自觉遵守本协议的相关内容。若您继续使用影月账号，则视为对修改内容的同意。当发生与本协议有关的任何争议时，以本协议最新版本的内容为准；若您不同意本协议的修改内容，请立即停止使用影月账号。
                  </li>
                  <li>
                    1.5
                    您确认您是具备完全民事权利能力和完全民事行为能力的自然人，有能力签署并遵守本协议，并对您注册和使用影月账号的全部行为独立承担法律责任。
                    <span>
                      若您未满18岁，或不具备前述主体资格，请在您的监护人的陪同下阅读本协议并由您的监护人对本协议的全部条款予以同意，在此情况下，您的监护人是本协议的当事方
                      <span>。</span>
                    </span>
                  </li>
                  <li>
                    1.6
                    您注册的影月账号将被允许用于影之月和/或其合作方提供的产品或服务，包括但不限于网页、应用软件、网络游戏软件、网络游戏服务或其他在线服务，具体以影之月确定的范围为准。您利用影月账号使用前述产品或服务应当遵守您与影之月和/或其合作方另行签订的用户协议和/或服务协议，包括但不限于《影月游戏使用许可及服务协议》。
                  </li>
                </ol>
                <p></p>
                <p></p>
                <h2 className="text-2xl my-4">二、账号的注册</h2>
                <ol>
                  <li>
                    2.1
                    您可通过官方网站、软件客户端、手机短信或其他影之月授权的方式申请影月账号，具体申请方式以影之月提供的为准。请您在注册前对注册渠道进行核实，若您从未经授权的第三方处进行影月账号的注册，影之月不对该账号的可用性进行保证，也不对您由此遭受的损失承担任何责任。
                  </li>
                  <li>
                    2.2
                    如您希望注册影月账号，您必需以本人的真实身份，并提供真实、完整、准确、有效的个人身份信息及相关信息进行实名注册，不得提供虚假的、不准确的个人身份信息，或使用他人的身份信息进行注册。您同意，您提供的真实准确的个人资料是认定您与账号关联性以及您身份的唯一依据，您应当依据相关法律的规定及本协议的约定对您提供的上述信息承担全部法律责任。若您的个人资料发生变化，您应当及时予以更新。若您不按照本协议的约定进行实名注册或更新相关信息，影之月有权拒绝或限制您对影月账号的使用。
                  </li>
                  <li>
                    2.3
                    您理解并同意，影之月有权审查您注册影月账号时所提供的个人身份信息是否真实、有效，并将您的个人身份信息提供至影之月合作的第三方机构进行实名核验，并可能将该等信息运用于防沉迷系统之中。
                  </li>
                  <li>
                    2.4
                    您在注册影月账号的过程中可能需要填写或上传个人简介、账号名称、账号头像等信息，若前述信息存在违法或不良信息，或冒用关联机构、社会名人进行注册的，影之月有权注销该账号，并向相关政府主管部门报告。
                  </li>
                </ol>
                <p></p>
                <p></p>
                <h2 className="text-2xl my-4">三、账号的使用</h2>
                <ol>
                  <li>
                    3.1
                    影月账号和账号信息的所有权归影之月所有，您作为初始申请注册人享有对影月账号的使用权。您不得以任何方式将您的影月账号提供给他人使用，包括但不限于出售、赠予、转让、出借、出租，也不得将影月账号用于商业用途。
                  </li>
                  <li>
                    3.2
                    若您当前使用的影月账号并非由您初始申请注册，也不是通过影之月提供的其他途径合法获得，则您不得登录该账号或利用该账号实施任意行为。请您立即联系账号的初始申请注册人或影之月。
                  </li>
                  <li>
                    3.3
                    为了呵护未成年人的健康成长，影之月有权依据相关法律的规定对未成年人所注册的账号进行一定的限制，如限制利用该账号登录的时长、充值的金额等。
                  </li>
                  <li>
                    3.4
                    您理解，影之月仅提供影月账号注册和使用服务，除此之外与注册或使用影月账号有关的设备（如个人电脑、手机及其他与接入互联网或移动网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费）均应由您自行负担。
                  </li>
                  <li>
                    3.5
                    您在注册或使用影月账号的过程中，需遵守本协议的约定和相关法律法规的要求，不得发布含有以下内容的信息或从事相关违法行为：
                    <ol>
                      <li>1) 违反宪法确定的基本原则的；</li>
                      <li>2) 危害国家统一、主权和领土完整的；</li>
                      <li>
                        3) 泄露国家秘密、危害国家安全或者损害国家荣誉和利益的；
                      </li>
                      <li>
                        4)
                        煽动民族仇恨、民族歧视，破坏民族团结，或者侵害民族风俗、习惯的；
                      </li>
                      <li>5) 宣扬邪教、迷信的；</li>
                      <li>6) 散布谣言，扰乱社会秩序，破坏社会稳定的；</li>
                      <li>7) 宣扬淫秽、色情、赌博、暴力，或者教唆犯罪的；</li>
                      <li>8) 侮辱、诽谤他人，侵害他人合法权益的；</li>
                      <li>9) 违背社会公德的；</li>
                      <li>10) 有法律、行政法规和国家规定禁止的其他内容的。</li>
                    </ol>
                  </li>
                  <li>
                    3.6
                    除非相关法律法规允许且影之月明确同意，您不得从事以下行为：
                    <ol>
                      <li>
                        1)
                        以非人工、非手动的方式注册影月账号，或频繁、批量注册、获取影月账号；
                      </li>
                      <li>
                        2)
                        为发送骚扰信息、垃圾信息、广告、诈骗信息或实现其他违法违规目的注册、获取或使用影月账号；
                      </li>
                      <li>
                        3) 盗取他人的影月账号或自影月账号盗取者处购买账号；
                      </li>
                      <li>4) 未经许可，收集他人影月账号信息；</li>
                      <li>
                        5)
                        利用账号从事损害影之月或其他用户的权益、违反本协议或相关法律法规的其他行为。
                      </li>
                    </ol>
                  </li>
                  <li>
                    3.7
                    若您注册或使用影月账号违反本协议的约定、相关法律法规的规定或对影之月造成损害的，影之月有权视情形对您采取限制、中止或终止您的影月账号、删除您的账号数据、要求您对影之月或第三方进行赔偿等措施。若您的任一账号违反本协议及其他相关规定的，影之月有权对您的所有账号予以制裁。
                  </li>
                  <li>
                    3.8
                    您理解并同意，若您发布第3.5条所列的违法信息、实施严重违背社会公德以及其他违反法律禁止性规定的行为，则影之月有义务依据相关法律法规的规定，对您采取法律要求的相应措施，包括但不限于立即停止传输、采取消除等处置措施、保存有关记录、向主管部门报告，删除含有该内容的地址、目录或关闭服务器。
                  </li>
                  <li>
                    3.9
                    为了维护您的合法权益，若您需要影之月为您提供影月账号注册人证明、原始注册信息等必要的协助和支持的，您应当向影之月提供与所注册的身份信息相一致的个人有效身份信息。影之月将根据需要向有关行政机关和/或司法机关提供相关信息资料。
                  </li>
                  <li>
                    3.10
                    您对于您所注册账号下的一切行为承担责任。若您将账号出售、赠予、转让、出借、出租给第三方，第三方所实施的行为视为您所实施的行为，影之月有权依据本协议要求您赔偿该等第三方造成的全部损失。
                  </li>
                  <li>
                    3.11 您理解并同意，若您连续<b>365</b>
                    天未登录或使用影月账号，影之月有权在提前发出通知的情况下，采取收回账号、删除账户数据和相关信息的措施，且您了解被删除的相关信息无法被恢复。
                  </li>
                </ol>
                <p></p>
                <p></p>
                <h2 className="text-2xl my-4">四、账号的保护</h2>
                <ol>
                  <li>
                    4.1
                    影之月将积极采取技术与管理等合理措施保障您影月账号的安全、有效；您有义务妥善保管账号及密码，并正确、安全地使用账号及密码，您对登录后所持影月账号产生的行为依法享有权利和承担责任。任何一方未尽上述义务导致账号密码遗失、账号被盗等情形而给您和他人的民事权利造成损害的，应当承担由此产生的法律责任。
                  </li>
                  <li>
                    4.2
                    若您发现您的账号或密码被他人非法使用或存在使用异常的情况，您应当及时根据影之月公布的有效方式通知影之月，并告知影之月需要采取的措施。在此情况下，您需要提供与注册身份信息相一致的个人有效身份信息。若经影之月核实信息一致的，影之月将采取相应措施（包括但不限于暂停您账号的登录和使用、将账号使用权限归还给您），由此给您或他人造成的损失（如导致账户内虚拟物品或虚拟货币的使用期限届满等）由您自行承担。若您没有提供个人有效身份证件或者提供的个人有效身份证件与所注册的身份信息不一致的，影之月有权拒绝您的上述请求，由此给您或他人造成的损失，由您自行承担。
                  </li>
                  <li>
                    4.3
                    您知悉并理解，影之月无法对使用身份信息的个人与身份信息的一致性进行核验。您的密码和个人身份资料是影之月判断账号使用权的唯一依据。有鉴于此，请您保管好与账号对应的密码、数字证书、手机动态口令或验证码、账户绑定的手机号码及相关设备。若他人利用您的密码或相关设备登录、使用、申诉账号，影之月对此不承担任何责任。
                  </li>
                </ol>
                <p></p>
                <p></p>
                <h2 className="text-2xl my-4">五、账号信息的收集与保护</h2>
                <ol>
                  <li>
                    5.1
                    您同意并授权影之月为履行本协议，或为帮助您完成影月账号的注册，或优化您影月账号的使用体验，或为本协议明确列明并要求您同意的其他目的，秉承合法、正当、必要的原则收集并使用您的相关信息，包括但不限于您在实名注册影月账号时提供的信息、您在使用影月账号过程中上传或提供的信息、账户数据、个人财产信息、虚拟交易信息、日志信息、设备信息、软件信息、使用语言、IP地址、位置信息，及您的其他必要信息（以下统称“
                    <b>账号信息</b>”）。
                  </li>
                  <li>
                    5.2
                    影之月应当依据相关法律法规及本协议的规定，存储并采取适当的安全防护措施保护您的账号信息，以防止账号信息的丢失、不当使用、未经授权访问或披露。
                  </li>
                  <li>
                    5.3
                    您知悉并理解，为实现本协议所述之目的，影之月可能向其合作伙伴或必要的其他第三方分享您的账户信息。影之月分享您的账户信息均应当通过本协议或其他方式取得您的同意。
                  </li>
                  <li>
                    5.4
                    您知悉并同意，影之月或其合作方有可能会利用影之月收集的账户信息向您发送有关商品促销、游戏服务或其他商业信息的电子邮件、短信、资讯或推送通知。若您不希望接受或继续接受相应信息，您可以按照影之月的相关提示选择取消订阅。
                  </li>
                  <li>
                    5.5
                    未经您许可，影之月不会向任何第三方提供、公开或共享您注册资料中的姓名、个人有效身份证件号码、联系方式、家庭住址等个人身份信息，但下列情况除外：
                    <ol>
                      <li>1) 您或您的监护人授权影之月披露的；</li>
                      <li>2) 有关法律要求影之月披露的；</li>
                      <li>
                        3) 司法机关或行政机关基于法定程序要求影之月提供的；
                      </li>
                      <li>
                        4) 影之月为了维护自己合法权益而向您提起诉讼或者仲裁时；
                      </li>
                      <li>5) 应您的监护人的合法要求而提供您个人身份信息时。</li>
                    </ol>
                  </li>
                  <li>
                    5.6
                    就账户信息的收集、使用和保护，影之月另行制定并发布了《影月用户隐私权保护政策和个人信息利用政策》（以下简称“隐私政策”），该隐私政策是本协议的有机组成部分，对本协议双方均具有约束力。该隐私政策内容与本第五条约定相冲突的，以隐私政策的内容为准。影之月提示您仔细阅读该隐私政策的内容。
                  </li>
                </ol>
                <p></p>
                <p></p>
                <h2 className="text-2xl my-4">六、法律适用和争议解决</h2>
                <ol>
                  <li>
                    6.1
                    本协议适用中华人民共和国的法律（不含冲突法）。当本协议的任何内容与中华人民共和国法律相抵触时，应当以法律规定为准，同时相关内容将按法律规定进行修改或重新解释，而本协议其他部分的法律效力不变。
                  </li>
                  <li>
                    6.2
                    本协议签订地为上海市徐汇区。如您和影之月就本协议的内容或其执行发生任何争议，应友好协商解决；协商不成时，双方同意交由本协议签订地具有管辖权的人民法院管辖。
                  </li>
                </ol>
                <p></p>
                <p></p>
                <h2 className="text-2xl my-4">七、其他约定</h2>
                <ol>
                  <li>
                    7.1
                    影之月对不可抗力导致的损失不承担责任。本协议所指不可抗力包括：天灾、法律法规或政府指令的变更，因网络服务特性而特有的原因，例如境内外基础电信运营商的故障、计算机或互联网相关技术缺陷、互联网覆盖范围限制、计算机病毒、黑客攻击等因素，及其他不能预见、不能避免并不能克服的客观情况。
                  </li>
                  <li>
                    7.2
                    您在注册和使用影月账号过程中应当遵守当地相关的法律法规，并尊重当地的道德和风俗习惯。如果您的行为违反了当地法律法规或道德风俗，您应当为此独立承担责任。
                  </li>
                  <li>
                    7.3
                    本协议所有条款的标题仅为方便阅读，本身并无实际涵义，不能作为本协议及相关条款涵义解释的依据。
                  </li>
                  <li>
                    7.4
                    如本协议中的任何条款因任何原因被判定为完全或部分无效或不具有执行力的，本协议的其他条款仍应有效并且有执行力。
                  </li>
                  <li>
                    7.5
                    影之月不行使、未能及时行使或者未充分行使本协议或者按照法律规定所享有的权利，不应被视为放弃该权利，也不影响影之月在将来行使该权利。
                  </li>
                  <li>
                    7.6
                    本协议自发布之日起实施，构成您和影之月之间就影月账号注册和使用的全部共识，并取代双方此前就相同事项达成的任何约定和理解。
                  </li>
                  <li>
                    7.7
                    如果您对本协议或本服务有意见或建议，请发送邮件至我们的客服邮箱:
                    <b>help@shadowmoon.cn</b>。
                  </li>
                </ol>
                <p></p>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

'use client'

import React, { useEffect, useState } from 'react'
import CustomInput from '../FormItemFloatLabel/CustomInput'
import { getProviders, signIn } from 'next-auth/react';

const Signin = () => {
    const [providers, setProviders] = useState<any>(null);

    useEffect(() => {
        (async () => {
          const res = await getProviders();
          setProviders(res);
        })();
      }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-10/12 border-y flex-col">
            <div>
                <div className='w-96'>
                    <div>Tên Đăng nhập</div>
                    <CustomInput label='Tên đăng nhập' name='name-login'/>
                </div>
                <div className='w-96'>
                    <div>Mật khẩu</div>
                    <CustomInput label='Mật khẩu' name='password-login'/>
                </div>
            </div>
            <div className='w-96'>
                <div className='h-14 flex justify-center items-center bg-blue-500 rounded-xl shadow-xl border'>Đăng nhập</div>
                <div className='h-14 flex justify-center items-center bg-red-500 rounded-xl shadow-xl border'>
                      {providers &&
                      Object.values(providers).map((provider: any) => (
                        <button
                          type="button"
                          key={provider.name}
                          onClick={() => {
                            signIn(provider.id);
                          }}
                          className="black_btn bg-red-500"
                        >
                          Đặng nhập bằng tài khoản google 
                        </button>
                      ))}
                </div>
            </div>
        </div>
      </div>
        </div>
  )
}

export default Signin
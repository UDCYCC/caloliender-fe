import { useState, ChangeEvent, FormEvent } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // 여기에 로그인 처리 로직을 추가합니다.
    console.log(`Username: ${username}, Password: ${password}`);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSocialLogin = (provider: string) => {
    // 해당 소셜 로그인 서비스의 API를 호출하거나 처리하는 로직을 추가합니다.
    console.log(`소셜 로그인 - Provider: ${provider}`);
  };

  return (
    <div>
      <div className='header'>
        <h2>LOGIN</h2>
      </div>
      <br/>
      <br/>
      <div className='today'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="사용자명"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          < br/>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          < br/>
          <button type="submit">로그인</button>
        </form>
      </div>
      <div>
        <button type="button" onClick={() => handleSocialLogin('google')}>
          Google 로그인
        </button>
        <button type="button" onClick={() => handleSocialLogin('kakao')}>
          kakao 로그인
        </button>
        <button type="button" onClick={() => handleSocialLogin('naver')}>
          naver 로그인
        </button>
      </div>
    </div>
  );
}

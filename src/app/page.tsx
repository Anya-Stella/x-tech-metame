'use client';

import { useState } from 'react';
import { updateProfile } from './action';

export default function Page() {
	const [profile, setProfile] = useState({
		gender: '',
		age: '',
		mbti: '',
		introduction: '',
		interest1: '',
		interest2: '',
		interest3: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setProfile({ ...profile, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		console.log("moove");
		e.preventDefault();
		try {
			const res = await updateProfile(profile);
			console.log("submit success");
			setProfile({
				gender: '',
				age: '',
				mbti: '',
				introduction: '',
				interest1: '',
				interest2: '',
				interest3: '',
			})
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<main className="flex h-screen items-center justify-center bg-teal-600">
			<div className="container rounded-xl w-7/12 h-5/6 p-8 bg-white text-black bg-opacity-90 flex flex-col justify-around items-center">
				<h1 className="text-3xl font-bold py-3 text-yellow-400 text-left w-full">プロフィール詳細</h1>
				<form onSubmit={handleSubmit} className="h-5/6 flex flex-col w-full items-start justify-start">
					<div className='w-full overflow-y-auto'>
						<div className="w-2/6 pt-3">
							<label htmlFor="gender" className="block text-lg font-semibold pl-2">性別</label>
							<select id="gender" name="gender" className="w-full p-2 mt-2 border rounded-lg" value={profile.gender} onChange={handleChange}>
								<option value="">選択してください</option>
								<option value="male">男性</option>
								<option value="female">女性</option>
								<option value="other">その他</option>
							</select>
						</div>
						<div className="w-2/6 pt-3">
							<label htmlFor="age" className="block text-lg font-semibold pl-2">年齢</label>
							<input type="number" id="age" name="age" className="w-full p-2 mt-2 border rounded-lg" placeholder="年齢を入力してください" value={profile.age} onChange={handleChange} />
						</div>
						<div className="w-full pt-3">
							<label htmlFor="mbti" className="block text-lg font-semibold pl-2">MBTI</label>
							<select id="mbti" name="mbti" className="w-full p-2 mt-2 border rounded-lg" value={profile.mbti} onChange={handleChange}>
								<option value="">選択してください</option>
								<option value="INTJ">INTJ</option>
								<option value="INTP">INTP</option>
								<option value="ENTJ">ENTJ</option>
								<option value="ENTP">ENTP</option>
								<option value="INFJ">INFJ</option>
								<option value="INFP">INFP</option>
								<option value="ENFJ">ENFJ</option>
								<option value="ENFP">ENFP</option>
								<option value="ISTJ">ISTJ</option>
								<option value="ISFJ">ISFJ</option>
								<option value="ESTJ">ESTJ</option>
								<option value="ESFJ">ESFJ</option>
								<option value="ISTP">ISTP</option>
								<option value="ISFP">ISFP</option>
								<option value="ESTP">ESTP</option>
								<option value="ESFP">ESFP</option>
								<option value="none">分からない</option>
							</select>
						</div>
						<div className="w-full pt-3">
							<h1 className="text-lg font-semibold pl-2">自己紹介</h1>
							<textarea id="introduction" name="introduction" className="w-full p-2 mt-2 border rounded-lg" placeholder="自己紹介を書いて下さい！" rows={4} value={profile.introduction} onChange={handleChange}></textarea>
						</div>
						<div className="w-full pt-3">
							<h1 className="text-lg font-semibold pl-2">話したい事・興味ある事</h1>
							<input type="text" name="interest1" className="w-full p-2 mt-2 border rounded-lg" placeholder="興味ある事 1" value={profile.interest1} onChange={handleChange} />
							<input type="text" name="interest2" className="w-full p-2 mt-2 border rounded-lg" placeholder="興味ある事 2" value={profile.interest2} onChange={handleChange} />
							<input type="text" name="interest3" className="w-full p-2 mt-2 border rounded-lg" placeholder="興味ある事 3" value={profile.interest3} onChange={handleChange} />
						</div>
					</div>

					<div className='w-full flex justify-center items-end'>
						<button type='submit' className="px-8 py-4 mt-4 bg-blue-500 text-white rounded w-1/2 bg-yellow-500 hover:bg-yellow-300">更新する</button>
					</div>

				</form>
			</div>
		</main>
	);
}


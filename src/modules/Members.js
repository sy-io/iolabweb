import * as React from 'react';

import Grid from '@mui/material/Grid';

import MemberCard from "./MemberCard.js"

import { useState } from 'react';




export default function Members() {

	const p_imageData = [
		{

			name: "Street Icecream Club",
		  	url: "images/p_02.jpg",
		  	desc: "❶　秋田公立美術大学ビジュアルアーツ専攻 4年生。映像×移動をテーマに表現活動を行う。\n❷　2000年、山形県酒田市生まれ。 秋田公立美術大学アーツ&ルーツ専攻4年生。"
		  	//desc: "秋田公立美術大学ビジュアルアーツ専攻 4年生。映像×移動をテーマに表現活動を行う。近年では、移動型映像装置「プロジェクタービークル」（造語）を制作し、野外投影をしている。制作の傍ら、配信プロジェクト「アイスが溶けてから。」を企画。秋田公立美術大学で活躍する学生や教員を取材し、その活動を発信している。厚揚げが好き。2000年、山形県酒田市生まれ。 秋田公立美術大学アーツ&ルーツ専攻4年生。詩の朗読を中心としたパフォーマンスをおこなったり、東京都の山奥で裸足で歩き回ったりしています。過去の展覧会などに早坂葉・渡邊泰地二人展「砂が叫ぶ」（新屋NINO/2021年）、早坂葉・後藤那月二人展「めぐりに滲む」（BIYONG POINT/2022年）、「ひのはらアート2022」（東京都檜原村/2022年）など。"
		},
		{

			name: "Hiraki-Lily",
		  	url: "images/p_01.jpg",
		  	desc: "青木と安藤の2人組。今回はベースとハープを使って色々します。"
		  	
		},
		{

			name: "sy",
		  	url: "images/p_04.jpg",
		  	desc: "数学とプログラミングと音楽が好きです。抽象的な話し合いが好きです。"
		  	
		},
		{

			name: "a-o",
		  	url: "images/p_03.png",
		  	desc: "❶　音・・・ando\n音に興味があります。\n❷　映像・・・o-kuro\nやりたいことは多いですが、できることは少ないです。魚とパイナップルが好きです。"
		  	
		},

	];


	const [profData, setprofData] = useState('');



	return (

		<Grid container spacing={4} alignItems="stretch" alignItems="top" justifyContent="center" >

				<Grid item xs={12} md={3} sm={5} >
					
					<MemberCard imgData={p_imageData[0]} />

				</Grid>
				<Grid item xs={12} md={3} sm={5} >
					
					<MemberCard imgData={p_imageData[1]} />

				</Grid>
				<Grid item xs={12} md={3} sm={5} >
					
					<MemberCard imgData={p_imageData[2]} />

				</Grid>
				<Grid item xs={12} md={3} sm={5} >
					
					<MemberCard imgData={p_imageData[3]} />

				</Grid>
		</Grid>

	);


}


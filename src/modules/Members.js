import * as React from 'react';

import Grid from '@mui/material/Grid';

import MemberCard from "./MemberCard.js"

import { useState } from 'react';





export function Members_vol3() {

	const p_imageData = [
		{

			name: "sanmal",
		  	url: "images/p3_01.jpg",
		  	desc: "関西とインターネットを拠点に活動中。2014年から音楽活動を開始し、現在は主にBass Music、Hardcore、nxcなどを横断した楽曲制作やDJ活動を行う。トラックメイカーであるpìccoloとのユニット、NGHTHYPとしても活動中。"
		},
		{

			name: "sugamasa.lab/Akibi_ITC",
		  	url: "images/p3_02.jpg",
		  	desc: "普段は自宅DJです。BPM 130半ばくらいの曲が好きです。"
		},
		{

			name: "ando",
		  	url: "images/p3_03.jpg",
		  	desc: "ライブペインティングやライブコーディング等のパフォーマンス活動の他に、絵画や電子工作、楽曲制作、映像制作なども行う。VJのo-kuroとa－oというユニットでも活動中。"
		  	
		},
		{

			name: "o_cabbage",
		  	url: "images/p3_04.png",
		  	desc: "主にグラフィックデザイン・映像制作をしている。i—/o|.LabではDJ/VJパフォーマンスを行う。特にクラブミュージックを好む。"
		  	
		},
		{

			name: "o-kuro",
		  	url: "images/p3_05.png",
		  	desc: "写真と映像制作を主に行なっている。サウンドクリエイターのandoとa-oというユニットでも活動中。"
		  	
		},
		{

			name: "sakariba boy",
		  	url: "images/p3_06.png",
		  	desc: "PIEO(Project Input—Enhansed—Output)にて、信号(情報)の変換に関する研究を進め、実践/検証を行う場としてi—/o|.Labを展開している。また倫理を題材とした「traffic right」シリーズにて、「よい/わるい」と「善/悪」の関係を概念的に把握するためのライブパフォーマンスや思考モデル等の制作を行なっている。"
		  	
		},
		{

			name: "sy",
		  	url: "images/p3_07.jpg",
		  	desc: "CoaRaMause.comにてMedia関連教材制作に関わっています。数式*音楽、プログラミング+身体、電子空間/学習空間を理解することを目指します。"
		  	
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
				<Grid item xs={12} md={3} sm={5} >
					
					<MemberCard imgData={p_imageData[4]} />

				</Grid>
				<Grid item xs={12} md={3} sm={5} >
					
					<MemberCard imgData={p_imageData[5]} />

				</Grid>
				<Grid item xs={12} md={3} sm={5} >
					
					<MemberCard imgData={p_imageData[6]} />

				</Grid>
		</Grid>

	);


}







export function Members_vol2() {

	const p_imageData = [
		{

			name: "sugamasa.lab/Akibi_ITC",
		  	url: "images/p2_01.jpg",
		  	desc: "普段は自宅DJです。BPM 130半ばくらいの曲が好きです。"
		},
		{

			name: "Ando",
		  	url: "images/p2_02.jpg",
		  	desc: "音出します。"
		  	
		},
		{

			name: "o_cabbage",
		  	url: "images/p2_03.png",
		  	desc: "音と視覚であれやこれや"
		  	
		},
		{

			name: "o-kuro",
		  	url: "images/p2_04.png",
		  	desc: "音で映像を動かします。"
		  	
		},
		{

			name: "Sakariba boy",
		  	url: "images/p2_05.jpg",
		  	desc: "2023 Tokyo maker faireで出展する《無線上網調律傘》のプロトタイプ《音調律傘》を披露します。VJもします。"
		  	
		},
		{

			name: "sy",
		  	url: "images/p2_06.jpg",
		  	desc: "CoaRaMause.comにてMedia関連教材制作に関わっています。"
		  	
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
				<Grid item xs={12} md={3} sm={5} >
					
					<MemberCard imgData={p_imageData[4]} />

				</Grid>
				<Grid item xs={12} md={3} sm={5} >
					
					<MemberCard imgData={p_imageData[5]} />

				</Grid>
		</Grid>

	);


}






export function Members_vol1() {

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


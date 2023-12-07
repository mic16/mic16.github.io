'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "84b6fe4e84e15310a92fbaa3bc1808b1",
"assets/AssetManifest.bin.json": "af233f7ed916a3959ac96df461e647fe",
"assets/AssetManifest.json": "4306d792fd8be9a2c4558489d7ee3364",
"assets/assets/flags/ac.svg": "d2efdd5942cc648f9b9fb9b2d25e4717",
"assets/assets/flags/ad.svg": "f07f4ebc86a1a08e7e2519bda186f4f2",
"assets/assets/flags/ae.svg": "dfeb0f940880884d11f30ebceef464be",
"assets/assets/flags/af-emirate.svg": "6e52e5e9add5abdf5b36e51a9bbc3e23",
"assets/assets/flags/af.svg": "5ce6cd72be6763228940e78d13e2cac4",
"assets/assets/flags/afar.svg": "2f9e1d6ae24b79d362377f29ce4b11da",
"assets/assets/flags/ag.svg": "f6b94a14908089d1b31c735263b0d974",
"assets/assets/flags/ai.svg": "5aac6128fd2bcd59469ad4dbd0e66a6f",
"assets/assets/flags/al.svg": "244afce9ac99c9f215ec7d4aa16dacd5",
"assets/assets/flags/am.svg": "3367445df6aacf4268a867f54b2aa012",
"assets/assets/flags/an.svg": "ab336a0e46d9fb17598d0e6589f5c02e",
"assets/assets/flags/ao.svg": "5b8624837922c3b279072b0b1cf3c43d",
"assets/assets/flags/aq-true_south.svg": "b2fcef9855b1d4d4b82e38920a70be90",
"assets/assets/flags/aq.svg": "2e181d4b257c74530f2ec6b2bdd80114",
"assets/assets/flags/ar.svg": "50bcaaec8c29006da8cabe0b097d9847",
"assets/assets/flags/as.svg": "b4518f6b67ef5bf611f4c0941ea0cf57",
"assets/assets/flags/at.svg": "33d39054f5c40c9e8c404101ccbc2aa6",
"assets/assets/flags/au-aboriginal.svg": "3db8ff14f45687bf3b8804c95e3db9b7",
"assets/assets/flags/au-act.svg": "c78bb7c088e7e451462bbf4f80b6b62c",
"assets/assets/flags/au-nsw.svg": "67c520311ba0b8f0e0e2e0bf0b7281c1",
"assets/assets/flags/au-nt.svg": "ceb573dc8320bc2fb48d4b88be0c59f1",
"assets/assets/flags/au-qld.svg": "d85b9a28fab4d05cd0a911d06d02f99c",
"assets/assets/flags/au-sa.svg": "d2f2f77e3a064c7af71086e791c4a340",
"assets/assets/flags/au-tas.svg": "dd220d6058c48a6a1fea20cb02db3499",
"assets/assets/flags/au-vic.svg": "dee219a6160d6e5d440566998b59c471",
"assets/assets/flags/au-wa.svg": "5438005815b7221aa77954d4bee9209c",
"assets/assets/flags/au.svg": "b966d328a46774f56be26905f9eb9684",
"assets/assets/flags/aw.svg": "d536ae24c11b08eef9efea4af5a1ec81",
"assets/assets/flags/ax.svg": "8716c282b286147ac7d899c2278c8fb2",
"assets/assets/flags/az.svg": "93d4994bf0c2670aea991618878b0688",
"assets/assets/flags/ba.svg": "f92494b7a31b30b018c0e8bcfa5690b1",
"assets/assets/flags/bb.svg": "1db266d702c39d521b38ef7578e89cee",
"assets/assets/flags/bd.svg": "33b0d66b6977a92a2b833435cd53d44a",
"assets/assets/flags/be.svg": "63fd03cf723a8df27f5a8156dc68f681",
"assets/assets/flags/bf.svg": "0679153f1422163537878563d8a0c6a4",
"assets/assets/flags/bg.svg": "0ef89f3e55e045c1e8e956c2a96da4ff",
"assets/assets/flags/bh.svg": "4bc0dacd5d4dc23475bb441fd603bdd4",
"assets/assets/flags/bi.svg": "761c83b881740e9c5109e0e5c6991828",
"assets/assets/flags/bj.svg": "2c32c62ebc5036ce3d23b75b70b4d884",
"assets/assets/flags/bl.svg": "30d6b24e5f6fba4700ff7ad7498e44aa",
"assets/assets/flags/bm.svg": "65034eeae3ddbbdb27d4afa32f40a512",
"assets/assets/flags/bn.svg": "b463ac712d6e450623473a6352f82e2d",
"assets/assets/flags/bo.svg": "2d373f6e99d7f6e1efa9b0d5dc76bffa",
"assets/assets/flags/bq-bo.svg": "c82fc5a3b87c0f6a406b4162aadab3be",
"assets/assets/flags/bq-sa.svg": "843523ab1f1343f927ba918f59a89345",
"assets/assets/flags/bq-se.svg": "3f241dbd64f15e7ce955c15148dd0c8d",
"assets/assets/flags/bq.svg": "c5422a93c839cfe7b1c7ff40bad3ae1f",
"assets/assets/flags/br.svg": "057f3318ec8094abfc02d746d78f167a",
"assets/assets/flags/bs.svg": "048f207088030e3c33408b18b4d40a0b",
"assets/assets/flags/bt.svg": "c81d52f9807fa65b6be80c2266e91986",
"assets/assets/flags/bv.svg": "8b4f7138cb13cb9d07a1e8e986b95e7a",
"assets/assets/flags/bw.svg": "9a7528b95cea43526a82c052154e60fe",
"assets/assets/flags/by.svg": "58ae33e6909cf72dbb9fd53faac7470f",
"assets/assets/flags/bz.svg": "cbbe4ee809c535c1a329174cd5ee7f76",
"assets/assets/flags/ca-bc.svg": "ff7a4c1986b43f8ff2e4b742086ca5d9",
"assets/assets/flags/ca-qc.svg": "ab939f9591850f42cf6a30802abd3e59",
"assets/assets/flags/ca.svg": "42c61d70587393fa5270d4addab566a6",
"assets/assets/flags/cc.svg": "1014990dcff05b48e7792292475828c5",
"assets/assets/flags/cd.svg": "ad03efd05727acf3f5ea5b0b59266454",
"assets/assets/flags/cf.svg": "2255e54e479952ea56392f831b8abfd1",
"assets/assets/flags/cg.svg": "6344c3632f30626a6fd5d531e693370e",
"assets/assets/flags/ch-gr.svg": "3a23ad8e55a0e01018e68c3340633e0d",
"assets/assets/flags/ch.svg": "f45a7dbf12930ac8ef8e9db2123feda5",
"assets/assets/flags/ci.svg": "f385ab70102fc72a5cc57c67549471a7",
"assets/assets/flags/ck.svg": "15edfdba417e001d539be7ef3ba40198",
"assets/assets/flags/cl.svg": "dfe5e4b9ad7f02d4196be54274b274c7",
"assets/assets/flags/cm.svg": "5ef78df88525c24662ba4535bae29058",
"assets/assets/flags/cn-hk.svg": "98c2dcbad583df2ead1ee449c27d910c",
"assets/assets/flags/cn-xj.svg": "e54d019e6f6ba494be8d80ad157a8928",
"assets/assets/flags/cn.svg": "daa4b5a7e549d7f7897e5101f6dc5131",
"assets/assets/flags/co.svg": "27b71dc72631d9205fe646448225fed5",
"assets/assets/flags/cp.svg": "b51f722bd183eff57b5c68e647347aa6",
"assets/assets/flags/cq.svg": "1635fef666855e78ed1b6bd0e519ad57",
"assets/assets/flags/cr.svg": "2c8a0b157da53116fa90ba3424e7a386",
"assets/assets/flags/cu.svg": "ced5bf8d4a51d9162a5d3e19d9f6545e",
"assets/assets/flags/cv.svg": "4e54347bc13d4298ba84b506b4ba8366",
"assets/assets/flags/cw.svg": "c7547a00007b79ed1156fccbf3c0ec18",
"assets/assets/flags/cx.svg": "95acc8ce21028d1403d65ee141f34e5e",
"assets/assets/flags/cy.svg": "170c71c5823c032c337bc380a2119c00",
"assets/assets/flags/cz.svg": "591673eebdcf515f5d5508add0fc009a",
"assets/assets/flags/de.svg": "e5476a0d42d2c69a20fa0ec8decaed25",
"assets/assets/flags/dg.svg": "470c50a197de3098639102b70a609b13",
"assets/assets/flags/dj.svg": "1ae4c0f6d4facad34075252f928a0a82",
"assets/assets/flags/dk.svg": "37a1865895f22ddb0f0e1bd2970cf2c9",
"assets/assets/flags/dm.svg": "f03d42f0847440b58d374f7a04bc3ae6",
"assets/assets/flags/do.svg": "c33b8d86bff9429da9d8a3eb4f71d745",
"assets/assets/flags/dz.svg": "300c399075a5a11f90917c766f6a8566",
"assets/assets/flags/ea.svg": "204ea6c18fe90c0e9ec30516bb4822b8",
"assets/assets/flags/earth.svg": "53ab0f03fe09042dc1a23f9fc221176b",
"assets/assets/flags/easter_island.svg": "9ea8770c9f6c82bca7e518343a2c3641",
"assets/assets/flags/east_african_federation.svg": "65f4af67806ce3806d0963921e014bc2",
"assets/assets/flags/ec-w.svg": "d7c184918ad5a3b1fa3eb857f2660bc3",
"assets/assets/flags/ec.svg": "0775eb34f8776aa2deb27a4ee07f696c",
"assets/assets/flags/ee.svg": "e24b6ca0aca558b3fc1374f9f248b1e2",
"assets/assets/flags/eg.svg": "662494cb6796d70cc87c894c3bc17bcd",
"assets/assets/flags/eh.svg": "bbe5c30ffe639317af1fd28b7ceae57b",
"assets/assets/flags/er.svg": "d7790c413c20478a2d03f83c5536fc6b",
"assets/assets/flags/es-ar.svg": "14bacb42cbe2b7054f9540a3abcebd68",
"assets/assets/flags/es-ce.svg": "d61c3d24b1956cfbac485a1dd7fbf0e9",
"assets/assets/flags/es-cn.svg": "0ffbff276ef119effd2ecd7a31c0912c",
"assets/assets/flags/es-ct.svg": "4cf48425dcfa48bd4e2b56f612b3ba0d",
"assets/assets/flags/es-ga.svg": "ec306dbdd18b02f9ba43e4475e3ca53a",
"assets/assets/flags/es-ib.svg": "f1382a29597864bc79d0f243dc7fbf93",
"assets/assets/flags/es-ml.svg": "c555c992a448cac8e29cc2b08d9bb22c",
"assets/assets/flags/es-pv.svg": "c3050ef4c37cc6498a2aa64f4328a409",
"assets/assets/flags/es-variant.svg": "3c3887816f694ca0c8dcc4f83adaa6b0",
"assets/assets/flags/es.svg": "2b7627ca6bb2aacc572bc37f4a81c7f3",
"assets/assets/flags/et-or.svg": "c248f227bf7431822919cd974db84bd7",
"assets/assets/flags/et-ti.svg": "ea1be59b1669ee6c84026d58cf6200ce",
"assets/assets/flags/et.svg": "0dc00578ef7b9517ab80907ed7be589c",
"assets/assets/flags/eu.svg": "c413f98efc6d3825b5756f2982d62b56",
"assets/assets/flags/european_union.svg": "871ae2e7221011c886ebe7ea36787943",
"assets/assets/flags/ewe.svg": "b616f78e8792f97c97f7b50cb995130d",
"assets/assets/flags/fi.svg": "475a737ec7729f15bea4b9c389a5314f",
"assets/assets/flags/fj.svg": "7e97c105aef6cfb947821c2794b9cc15",
"assets/assets/flags/fk.svg": "f287bd407dbc5555fd8c89946ffe8cc3",
"assets/assets/flags/fm.svg": "eeaa12a27ba022219aa7a10f9a033335",
"assets/assets/flags/fo.svg": "275f04c86752a8eba6df22d6a87d8e95",
"assets/assets/flags/fr-20r.svg": "2c3ecb76cda9b92e3a8b2185e917538f",
"assets/assets/flags/fr-bre.svg": "8fef8dfec74ee879236e7c78bc54740d",
"assets/assets/flags/fr-cp.svg": "3776198d80d0da0132606901355fb60b",
"assets/assets/flags/fr.svg": "dc3c45c4e531d31397b4b378354d476c",
"assets/assets/flags/fx.svg": "ce21f34610115fedf1610ca108ad8044",
"assets/assets/flags/ga.svg": "3f4840cd3d3fb99ab3cc74a75708904c",
"assets/assets/flags/gb-con.svg": "b1ecbcc70510ddc8789ea5aab0632a81",
"assets/assets/flags/gb-eng.svg": "84b5f8c610e31e21ad13ca2ac8ef5fc0",
"assets/assets/flags/gb-nir.svg": "16204abaa3daf14405593f10c1c271ad",
"assets/assets/flags/gb-ork.svg": "b62cd4cfbb8d80ba5a545f8cd4db9c1c",
"assets/assets/flags/gb-sct.svg": "63719ae5ea761cda2d4466fd5069f2b2",
"assets/assets/flags/gb-wls.svg": "db13343f3797ce7556e23317c142e94a",
"assets/assets/flags/gb.svg": "c2c3cadcc5b107aaaee8df05b7811921",
"assets/assets/flags/gd.svg": "b5e51c48e573d662975a545d020dc781",
"assets/assets/flags/ge-ab.svg": "35714e5484036b7b0f4e8261aec155ad",
"assets/assets/flags/ge.svg": "d2a986b5d09e6315c142fe360bb676e4",
"assets/assets/flags/gf.svg": "eb540a337988046574ce8c208ea11973",
"assets/assets/flags/gg.svg": "7d311b0411753c514db2915acb61e4cc",
"assets/assets/flags/gh.svg": "b732d1fe295ded76c447aa57902b9cc0",
"assets/assets/flags/gi.svg": "fb52d8c2f2f4a837c89eb26a236c7813",
"assets/assets/flags/gl.svg": "3fd508ebb8ba5c86100a1d92ea969803",
"assets/assets/flags/gm.svg": "e00cacd6dcf7f6b4a1c1caea6adf78d7",
"assets/assets/flags/gn.svg": "3f4a6d5a0b32d69bb017ec9d0aed3434",
"assets/assets/flags/gp.svg": "4a13339fdb87a1ea1a22b24b7d5618a5",
"assets/assets/flags/gq.svg": "3a66a4a1b1012779615b403b8aca16c4",
"assets/assets/flags/gr.svg": "760ef5113334e1192295868a53ee7abc",
"assets/assets/flags/gs.svg": "4dfb464b36970f5141ed830a12f694b5",
"assets/assets/flags/gt.svg": "c9385b061ee36b46006e063311c0d6b8",
"assets/assets/flags/gu.svg": "10a27bf1ee22883065bb085fb20fb893",
"assets/assets/flags/guarani.svg": "ea17e71de723c56fb47959cf9dbc7bc7",
"assets/assets/flags/gw.svg": "ac71ef8446359525384399df8439c59e",
"assets/assets/flags/gy.svg": "3ac8d8fb43731497a59c3be6671efde5",
"assets/assets/flags/hausa.svg": "7ff8b9efe82513cdc225ce6a72091f40",
"assets/assets/flags/hk.svg": "7667be2ebe66da6b43405536358a48dc",
"assets/assets/flags/hm.svg": "3dc2f0d86427606a9d2001f6de18e5f2",
"assets/assets/flags/hmong.svg": "a4e3b886c198f1fd78701a5118572e3e",
"assets/assets/flags/hn.svg": "94abe2f41dbab8b161a979077d336d93",
"assets/assets/flags/hr.svg": "3c3cb4e0bb504066e5607df14d1f3b43",
"assets/assets/flags/ht.svg": "83223775ec37213f37d3b1c5599f9edd",
"assets/assets/flags/hu.svg": "8f4c390339a02ee646bf06a7d3977502",
"assets/assets/flags/ic.svg": "b47fce8f551e548b1e59d17253148eb4",
"assets/assets/flags/id.svg": "29d7dbd5af98200ee68517c4be6b94f0",
"assets/assets/flags/ie.svg": "7b659f5a5c6fc721750da5e95edd10d3",
"assets/assets/flags/il.svg": "1243ac49f28c1f43856bbcf2d648af53",
"assets/assets/flags/im.svg": "f7e83cac25acaffcd543c34025c3d1f1",
"assets/assets/flags/in.svg": "51112aca8b3e19c68fce3bc46f67f19d",
"assets/assets/flags/io.svg": "3d2c2aa39a63427d98f7c4f963a699d4",
"assets/assets/flags/iq-kr.svg": "c5aa95d96b1bd6498b0c0a36122cf6f5",
"assets/assets/flags/iq.svg": "0885ff7d2ac292fcd7cdd5dacef7f4e4",
"assets/assets/flags/ir.svg": "9219b4a55203ac0d093b4af13728e384",
"assets/assets/flags/is.svg": "9e18eabf2cdfada2761be0d08414f937",
"assets/assets/flags/it.svg": "ff40703386d1ce5dcb6f44732809e56f",
"assets/assets/flags/je.svg": "db9c6cf00b28c9b3f6c54b2753835364",
"assets/assets/flags/jm.svg": "9d4a1bc69652a0e9c4eb657be8224793",
"assets/assets/flags/jo.svg": "837db7446e42e59431d8f9a3bb7ff6b0",
"assets/assets/flags/jp.svg": "be04fd894b0d6e13a16ec1bb874b74e2",
"assets/assets/flags/kanuri.svg": "b36d80c018868f849b227590c6c6f083",
"assets/assets/flags/ke.svg": "c0bf589a9511a36bea87979ee4c1c3d1",
"assets/assets/flags/kg.svg": "a92b7300128c8005e1109ee88f0619b8",
"assets/assets/flags/kh.svg": "3a7a7d57d2692b90ec3663b258211ba0",
"assets/assets/flags/ki.svg": "28e34a8854062dea9cb2784882b84631",
"assets/assets/flags/kikuyu.svg": "70fffea0d54785f77e26ef5750e29dcd",
"assets/assets/flags/km.svg": "4a12bb178db2290729910f61273aeff7",
"assets/assets/flags/kn.svg": "0edddebdd0296d4a86e51310d1940a3b",
"assets/assets/flags/kongo.svg": "46bc366c20833e703e44a1a2c7827eb1",
"assets/assets/flags/kp.svg": "32070bf9c925fbd1a945013d4056987e",
"assets/assets/flags/kr.svg": "df2ac430f855e8906b0f499caeb73689",
"assets/assets/flags/kw.svg": "f236070f2b656334445a684af35fa9be",
"assets/assets/flags/ky.svg": "144850afa8deb943b589b0cf6341ab4f",
"assets/assets/flags/kz.svg": "3d973b6d79281a3fb5b92f1c5a560ecd",
"assets/assets/flags/la.svg": "c86fffbfeb449e1b591d859528de4129",
"assets/assets/flags/lb.svg": "107c3be9d99f0b4c4ed4f9933d383928",
"assets/assets/flags/lc.svg": "82209f2ebd1e1ecba8d68194d8c4cda3",
"assets/assets/flags/li.svg": "535b82bf7e54c3f803e1416c665e00e9",
"assets/assets/flags/lk.svg": "9e0e66b47d769e0debc739a9a887d09e",
"assets/assets/flags/lr.svg": "03762e2d6b0bc5ec8323aa28ef04a9a8",
"assets/assets/flags/ls.svg": "fa89864d6c4c887dbcce727bc039687b",
"assets/assets/flags/lt.svg": "793eda52fd8268ea8c2a0ba876fcbbb5",
"assets/assets/flags/lu.svg": "8a3f8c988859932862f9047865bbde39",
"assets/assets/flags/lv.svg": "9697c1c57eea9b2b50ed6761e7cbdefb",
"assets/assets/flags/ly.svg": "df3155b98edf6e141f67663c2ffaf352",
"assets/assets/flags/ma.svg": "f90e3f47b004e4c1779db659b5522e13",
"assets/assets/flags/malayali.svg": "284dad1ccec1f0ceb33b15bead430060",
"assets/assets/flags/maori.svg": "01cbe97c1a996ed2b1fba56263d59d84",
"assets/assets/flags/mars.svg": "5164baac1e70500a9586a0c273ddce9f",
"assets/assets/flags/mc.svg": "5b037c6b61701ec8cef7f4ba22ee297a",
"assets/assets/flags/md.svg": "667635e5a977946f3c551db63d2f6688",
"assets/assets/flags/me.svg": "420389a18960efd3be2aed0147e49791",
"assets/assets/flags/mf.svg": "532e1d9074c6f8a8d8cc33ca5398175f",
"assets/assets/flags/mg.svg": "8785f8d07da272f1fec074ac178ace2f",
"assets/assets/flags/mh.svg": "ec211b569617b17afabd8e1b93df9338",
"assets/assets/flags/mk.svg": "8e28b928e1f35b8077b91e10f790dd0e",
"assets/assets/flags/ml.svg": "0fdff6d2b13f77160baccea393413240",
"assets/assets/flags/mm.svg": "e1e9937625af45d6d6c72e0b02084123",
"assets/assets/flags/mn.svg": "ab522741021a33c88f45a1d2b0d9ac50",
"assets/assets/flags/mo.svg": "a829e8877bcb790849dd4c682fbdfd39",
"assets/assets/flags/mp.svg": "e5069541bb00466ebfc37bbebfed0ee1",
"assets/assets/flags/mq.svg": "1f9641d6b865064a1ae437be9cea677d",
"assets/assets/flags/mr.svg": "c94614cf0ac44e46ee110c4f1f942f4e",
"assets/assets/flags/ms.svg": "df1f038bfc3b34bdbb3522d3dd3bc4fa",
"assets/assets/flags/mt.svg": "80ed8eed583102ce3f4dd021a779069c",
"assets/assets/flags/mu.svg": "e7b1ed616794d3825927189f83d19328",
"assets/assets/flags/mv.svg": "e96351fd6c8807774d96f08d1e84933c",
"assets/assets/flags/mw.svg": "821bfec12652e2deb9ed052774e93a50",
"assets/assets/flags/mx.svg": "3ec0ef90ee44d55257594e5b320af639",
"assets/assets/flags/my.svg": "af3c3e9b290175550cb7a19b7721ccb5",
"assets/assets/flags/mz.svg": "f104942234e651bf0c8ebca00ff5ae29",
"assets/assets/flags/na.svg": "d1ebb4bd2c2097be74d64f8882d6997e",
"assets/assets/flags/nc.svg": "dfbc2084830be0845f4c6f687f8c6aaa",
"assets/assets/flags/ne.svg": "f1c7f30e78f7dc79467fbed3d77fd564",
"assets/assets/flags/nf.svg": "de87d19a53de5f067e61d1b7b442b05b",
"assets/assets/flags/ng.svg": "9d60aa0d417e613d03cde8413545528d",
"assets/assets/flags/ni.svg": "704a21bf8b7aaec1f3e004ff27f8166d",
"assets/assets/flags/nl-fr.svg": "5a34c3ebedff1eeef5879c676a06486f",
"assets/assets/flags/nl.svg": "ee9b0bd34dd0925a7fb75bdb10028e55",
"assets/assets/flags/no.svg": "6ad5392835cd9033852886113806ede5",
"assets/assets/flags/northern_cyprus.svg": "9d6aacf9fc4a03473cbb2a28d7412f29",
"assets/assets/flags/np.svg": "1452f3dc94aabc6adf348d364d3c9e2a",
"assets/assets/flags/nr.svg": "df32b38fbd580e6a47dd2df18c8b7165",
"assets/assets/flags/nu.svg": "bf9cb836af31fab2773c60bee593b6e4",
"assets/assets/flags/nz.svg": "e7d2be7eedbe08c3c6f9e1fce5d9db44",
"assets/assets/flags/om.svg": "957fa2cc624a8264e6335f7fb2d94dad",
"assets/assets/flags/otomi.svg": "529ff882274a6071bd356033e60256c5",
"assets/assets/flags/pa.svg": "9904c98ff645a433a5865a46069e3fb0",
"assets/assets/flags/pe.svg": "c96225a37b5c24767640100c52467d5d",
"assets/assets/flags/pf.svg": "3910f57f54c84b2a3b023c6a780379de",
"assets/assets/flags/pg.svg": "c7c6415305f2bca597407a9d9444ce44",
"assets/assets/flags/ph.svg": "ba804bbacdfd3c3b99fe06f8e70f160e",
"assets/assets/flags/pk-jk.svg": "7ab85a827b3da296ae99fde9a373cea1",
"assets/assets/flags/pk-sd.svg": "b6f892cb586ea25143434bdbcbcae424",
"assets/assets/flags/pk.svg": "8e1b819cec9ac503c212583bcfdbbb0b",
"assets/assets/flags/pl.svg": "dab68e3036fcb93a86f919d80839319c",
"assets/assets/flags/pm.svg": "67e1110099471ea06b5002b3f6151ae1",
"assets/assets/flags/pn.svg": "3aa5bee62920544e2918471aef4926b7",
"assets/assets/flags/pr.svg": "29878f1db3675601456fe9779e4f35b4",
"assets/assets/flags/ps.svg": "67375bb499ccff93536d537071ef86f7",
"assets/assets/flags/pt-20.svg": "1fd7f5bdc3abe1b7e79e08f7fe57c2f4",
"assets/assets/flags/pt-30.svg": "9496165a228a4d33be83d7fb4c48761b",
"assets/assets/flags/pt.svg": "abc9ef40c1b2ff65bc0ad80affd10788",
"assets/assets/flags/pw.svg": "9e79308401c325a3f3c76807f80130e7",
"assets/assets/flags/py.svg": "bb1899d3a8c7fb2c2ae0b8495b093fad",
"assets/assets/flags/qa.svg": "97b9b44e33ccbbe459a0e3fda97d9f18",
"assets/assets/flags/quechua.svg": "4f38f7af82ce9ffdd157039adde4efc9",
"assets/assets/flags/re.svg": "1ffe3e405cef9bc34268edede7d5f9a4",
"assets/assets/flags/ro.svg": "feb88609ec1d6966b5ac0cffb888cef0",
"assets/assets/flags/rs.svg": "437d85037d8ba5d4e4158b085687a5d8",
"assets/assets/flags/ru.svg": "083dca98f3cebfd6bcc2471c60e2748a",
"assets/assets/flags/rw.svg": "408bebb0110eca4e236ce302ef3688d1",
"assets/assets/flags/sa.svg": "6a6a776e6eafd7894a15b59489d256e0",
"assets/assets/flags/sami.svg": "f1a5018ac2d0ebfe6b82a11b088cfab6",
"assets/assets/flags/sb.svg": "b3481d949279ba4bfabe1ab5b64ce61c",
"assets/assets/flags/sc.svg": "bc08a6b5a14fc42c3b05d519ec6f810b",
"assets/assets/flags/sd.svg": "3aa7c54abc6030365f7aaa3066358463",
"assets/assets/flags/se.svg": "01887b79a05dc88a4c59f3dc8ce2bf97",
"assets/assets/flags/sg.svg": "ac975d1a1ef9f8a921c84454b401c9ef",
"assets/assets/flags/sh-ac.svg": "de8950014e78f337c31085c8d8060d08",
"assets/assets/flags/sh-hl.svg": "9777e158e3729ef5315f2b1edd9ce54d",
"assets/assets/flags/sh-ta.svg": "f9539d1fb279ec2b7db591506883354f",
"assets/assets/flags/sh.svg": "17b3694a17c4805a305dbd29b2062645",
"assets/assets/flags/si.svg": "5a0703e0bb6f28f989a35fe00a516c58",
"assets/assets/flags/sj.svg": "8b4f7138cb13cb9d07a1e8e986b95e7a",
"assets/assets/flags/sk.svg": "7365349f3806a60924ce1cd75d159a5b",
"assets/assets/flags/sl.svg": "b40874c7aad54ff1696b0c1828611780",
"assets/assets/flags/sm.svg": "eb21fa05f80a74793fb8d96c7b792b5a",
"assets/assets/flags/sn.svg": "21c497e852ad41952ec941687c43ebef",
"assets/assets/flags/so.svg": "ba052f96bb8187d86389a0ec479be9c7",
"assets/assets/flags/somaliland.svg": "e08f14f8d6bf24800b40f0dd35b2c0f2",
"assets/assets/flags/south_ossetia.svg": "aa12aecc90abd6c43578b7c3e5757d52",
"assets/assets/flags/soviet_union.svg": "94948aaad5f3eb9c1e8d479676cacb9f",
"assets/assets/flags/sr.svg": "183a9e40141ef7a6c92f9bbbb8144385",
"assets/assets/flags/ss.svg": "08d2cc41f7a06cd7cb436886eec9a9bc",
"assets/assets/flags/st.svg": "1403f2d22c59133494fd9ebe2ddff95a",
"assets/assets/flags/su.svg": "8c7de354c7b73205c7b53f40201d5693",
"assets/assets/flags/sv.svg": "e78b64970f591854b6087c6a92ae9134",
"assets/assets/flags/sx.svg": "1228f6668ea3b3c79d212bdeb4b44e3c",
"assets/assets/flags/sy.svg": "366d1ac83c492cb1835ff481f6a1bc65",
"assets/assets/flags/sz.svg": "287333f40e1b6e6705160c45a4331253",
"assets/assets/flags/ta.svg": "27e2e06bd2bf16a7883337c6f7cfa085",
"assets/assets/flags/tc.svg": "c93e03305fc3d3f75376a240ab3056ca",
"assets/assets/flags/td.svg": "a5bcfd6e4600975b44cadd15dc1cd416",
"assets/assets/flags/tf.svg": "a668e4470ab3ff8daa49e3fa3ba9914f",
"assets/assets/flags/tg.svg": "b40b5851491758034b1292a1b6e7d7ef",
"assets/assets/flags/th.svg": "f213dbbef7b45a13ca72862af6e662d3",
"assets/assets/flags/tibet.svg": "64a0f08665e4b60534e5a09de1efc0b5",
"assets/assets/flags/tj.svg": "6f83dc6a5c45754ec89e5ed62aea63e6",
"assets/assets/flags/tk.svg": "9a878bbfb0db8d0535d7975dcb5a0a13",
"assets/assets/flags/tl.svg": "1b22495b503f1e441453badb9f4f4845",
"assets/assets/flags/tm.svg": "b792aa429b9486d200810ee496f6dc7e",
"assets/assets/flags/tn.svg": "5c013018d4d863aa7928a5d94a16e287",
"assets/assets/flags/to.svg": "5cba98ad640082174f6bdceeb622decf",
"assets/assets/flags/torres_strait_islands.svg": "287d7bc66716227864f9a188a994927f",
"assets/assets/flags/tr.svg": "b4a158322e521d3a0ec446c0fbd07ca0",
"assets/assets/flags/transnistria.svg": "64456833a003f41bb72a5d2e3bc751d0",
"assets/assets/flags/tt.svg": "ee80b6dceb1902699c325854e3a3b34f",
"assets/assets/flags/tv.svg": "6c6bdb16922358702bfb90e7fe0d56ee",
"assets/assets/flags/tw.svg": "a86d62f630dda0be1371bd6aecc9d94d",
"assets/assets/flags/tz.svg": "77bf1703cfb0a28378ff5cde4f18bed9",
"assets/assets/flags/ua.svg": "6ef59119c38bc5e1eb860bd17fdfa84b",
"assets/assets/flags/ug.svg": "abab7fff91573ff833850f9d8b42f1e1",
"assets/assets/flags/uk.svg": "185ac3560f5bd7e68b0fe3fed98d90a6",
"assets/assets/flags/um.svg": "3245c8776bd57a1883a38e5a1d526730",
"assets/assets/flags/un.svg": "de05081613f54d5890208cc8d9d600e4",
"assets/assets/flags/united_nations.svg": "fcf6200ed285e2f90a4ab63440c4239f",
"assets/assets/flags/us-ak.svg": "186c09d6882522df979f1f76bea4a72d",
"assets/assets/flags/us-al.svg": "e83684d8e703c4cfd693fb6fb5e6a54d",
"assets/assets/flags/us-ar.svg": "9075c930f9f63f3b9f6ae2836e722d42",
"assets/assets/flags/us-az.svg": "e10c25fbc1c448bb7994419b3b9d3a29",
"assets/assets/flags/us-ca.svg": "86d70085659d61210b50cae4c1b35b30",
"assets/assets/flags/us-co.svg": "b25c2286ce8d83b10ac3ba91582f8cdf",
"assets/assets/flags/us-dc.svg": "f0753399e0a5bcff807eadb2f6d8e56a",
"assets/assets/flags/us-fl.svg": "25c93e91db7173d763de714d7a037a58",
"assets/assets/flags/us-ga.svg": "cff7a4a573deea6f6ba1d5fad4e0e71a",
"assets/assets/flags/us-hi.svg": "e178e14e60c288cecc15896b25d6db43",
"assets/assets/flags/us-in.svg": "f6373366a7848cf53c6ef85c0585e391",
"assets/assets/flags/us-mo.svg": "f3539b0a1690b4c24ff454cdd05346fc",
"assets/assets/flags/us-ms.svg": "314a66ee5b2a0a29309eac6e457b9931",
"assets/assets/flags/us-nc.svg": "e454a32b47ea59c165611cf87e14d220",
"assets/assets/flags/us-nm.svg": "129661a980f130319996fba7f74df338",
"assets/assets/flags/us-ri.svg": "eaeb68d37d1e384de37192863f12d21f",
"assets/assets/flags/us-tn.svg": "e1d7c7561a597395c87f90fdfff056f9",
"assets/assets/flags/us-tx.svg": "13ccaaadbcc55b3d85b93779280a124c",
"assets/assets/flags/us.svg": "a1454bbb5b13a30a70af5851b3aaa8a4",
"assets/assets/flags/uy.svg": "6720b2e47fdadc2c3921cd44e05689aa",
"assets/assets/flags/uz.svg": "2c99360b398906120f6265a5a5915c36",
"assets/assets/flags/va.svg": "318a1d440787a98ce584119691a6021d",
"assets/assets/flags/vc.svg": "a390bb4bdfc51827b0c2b66f3fd9e881",
"assets/assets/flags/ve.svg": "6f3250ea4752641871f933f0c98cfba1",
"assets/assets/flags/vg.svg": "e4b5415e4c9d5f8f9a89ff645b1f3fc7",
"assets/assets/flags/vi.svg": "c7208ad93d7db9f0fabb8989bdebe555",
"assets/assets/flags/vn.svg": "4bc2a5601a76d831d6d55ea857f8b4c6",
"assets/assets/flags/vu.svg": "e2349f70ba865da34faf0e3f0502af3c",
"assets/assets/flags/wf.svg": "ea5aa6c3d745bc9e5bc4e62c37da4931",
"assets/assets/flags/wiphala.svg": "cb755e3fee6b3f0cce2c0cbc79facde2",
"assets/assets/flags/ws.svg": "e03072bc05344ccd2fea95e8f8cc63cc",
"assets/assets/flags/xk.svg": "a4f5eed93152605396ad671ef5b91a56",
"assets/assets/flags/xx.svg": "30e54fd1cff28263dfa2ea82a9d5de7b",
"assets/assets/flags/ye.svg": "c8aadcdaab6af181bcfc4d0d79b2f7e2",
"assets/assets/flags/yorubaland.svg": "e3118b4e92d171ae27fe09472163f5e3",
"assets/assets/flags/yt.svg": "226d5728915c117e646d8c96bf0ee908",
"assets/assets/flags/yu.svg": "5de084d57ef9743e49e5e65567e75248",
"assets/assets/flags/za.svg": "855c9dc1f5bb5efe1b1a3f4f3a71a316",
"assets/assets/flags/zm.svg": "f6c0ef98ed3bbce0d3383c35217256f0",
"assets/assets/flags/zw.svg": "76db6ed54a43d69822a861e69eff055d",
"assets/assets/fonts/CaviarDreams.ttf": "3670aa493ee09e92c7b8e1e7c2f5b441",
"assets/assets/images/jpg/profile_picture.jpg": "a20837429041ecdb00967eb83e1afd92",
"assets/assets/images/png/logos/camatau-logo.png": "3433a3c5e125098e7cd6d9b00e738ba2",
"assets/assets/images/png/logos/dart-logo.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/images/png/logos/docker-logo.png": "96dd6e73dcac5609bb0ac494a0cc3b61",
"assets/assets/images/png/logos/flutter-logo.png": "f78d11c9cda36c52917f4794d09f10d9",
"assets/assets/images/png/logos/nestjs-logo.png": "93b99c296cd303e9087b2832436dc189",
"assets/assets/images/png/logos/nodejs-logo.png": "d1c1e9007502042d1a6f0b57978ef1cd",
"assets/assets/images/png/logos/pss-logo.png": "9da743d4747772ce9ad0b3da8e6f17af",
"assets/assets/images/png/skwad-app.png": "21b43ad26f82abf690cf3e27fb3ef142",
"assets/assets/pdfs/resume_en.pdf": "88b898b0cf9d8d5217dab63de6528f5f",
"assets/assets/pdfs/resume_fr.pdf": "0eb5d37a98eed112b7e31ba0d6cd6b07",
"assets/assets/pdfs/resume_nl.pdf": "88b898b0cf9d8d5217dab63de6528f5f",
"assets/FontManifest.json": "bcc11ffe616679dab7317bbacd058e83",
"assets/fonts/MaterialIcons-Regular.otf": "9ba76d5e474ef69dd8e007ccd237f1bb",
"assets/NOTICES": "18aa96aebbaf51f9ce12502d89b13090",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d74351d74c339fb88f10c11132db7edc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2af0c81e7c862da7967fee3cf1dfb5be",
"/": "2af0c81e7c862da7967fee3cf1dfb5be",
"main.dart.js": "2df18692f11803310b8e4b04a6d665f5",
"manifest.json": "5c1c289131f930ad09d7b0f8d0501cc5",
"version.json": "2e336249af55e82cc1e9559ad501862a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

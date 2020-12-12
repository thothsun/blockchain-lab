<template>
  <el-container direction="vertical">
    <myheader index="/achievements"></myheader>
    <el-main class="main-content">

      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="20" :sm="18" :md="16" :lg="14" :xl="12">
          <h1>最新成果</h1>
          <h3 style="margin-top: 10px">FedCoin: A Peer-to-Peer Payment System for Federated Learning</h3>

          <p style="display: flex;align-items: center;margin-top: 20px">查看论文：
            <el-link href="https://arxiv.org/abs/2002.11711" target="_blank">https://arxiv.org/abs/2002.11711</el-link>
          </p>
          <p style="display: flex;align-items: center;margin-top: 10px">在线实验：
            <el-link href="http://demo.blockchain-neu.com" target="_blank">http://demo.blockchain-neu.com</el-link>
          </p>

          <p style="display: flex;align-items: center;margin-top: 10px">视频演示：</p>

          <div style="width: 100%;text-align: center">
            <video width="640" height="360" controls="controls" preload="metadata">
              <source :src="'/FedCoin.mp4'" type="video/mp4">
            </video>
          </div>

          <p style="display: flex;align-items: center;margin-top: 20px">备用播放地址1：
            <el-link href="https://v.youku.com/v_show/id_XNDU2NjA5NzQ3Mg==.html" target="_blank">优酷</el-link>
          </p>
          <p style="display: flex;align-items: center;margin-top: 10px">备用播放地址2：
            <el-link href="https://youtu.be/u5LPLdZvd0g" target="_blank">YouTube</el-link>
          </p>

          <br>

          <h3 style="margin-top: 10px">Proof of Learning (PoLe): Empowering Machine Learning with Consensus Building on Blockchains</h3>

          <p style="display: flex;align-items: center;margin-top: 20px">查看论文：
            <el-link href="https://arxiv.org/abs/2007.15145" target="_blank">https://arxiv.org/abs/2007.15145</el-link>
          </p>

          <p style="display: flex;align-items: center;margin-top: 10px">视频演示：</p>

          <div style="width: 100%;text-align: center">
            <video width="640" height="360" controls="controls" preload="metadata">
              <source :src="'/POLE.mp4'" type="video/mp4">
            </video>
          </div>

          <el-divider></el-divider>


                   <h1>编写书籍</h1>

                   <ul>
                     <li v-for="item in books" class="item">
                       {{item}}
                     </li>
                   </ul>

          <el-divider><i class="el-icon-notebook-2"></i></el-divider>

          <h1>发表论文</h1>

          <h3>2021</h3>

          <ul>
            <li v-for="item in papers2021" class="item animated zoomIn">
              {{item}}
            </li>
          </ul>

          <h3>2020</h3>

          <ul>
            <li v-for="item in papers2020" class="item animated zoomIn">
              {{item}}
            </li>
          </ul>

          <h3>2019</h3>

          <ul>
            <li v-for="item in papers2019" class="item animated zoomIn">
              {{item}}
            </li>
          </ul>

          <h3>2018</h3>

          <ul>
            <li v-for="item in papers2018" class="item animated zoomIn">
              {{item}}
            </li>
          </ul>

          <h3>2017</h3>

          <ul>
            <li v-for="item in papers2017" class="item animated zoomIn">
              {{item}}
            </li>
          </ul>

          <h3>2016</h3>

          <ul>
            <li v-for="item in papers2016" class="item animated zoomIn">
              {{item}}
            </li>
          </ul>

          <h3>2015</h3>

          <ul>
            <li v-for="item in papers2015" class="item animated zoomIn">
              {{item}}
            </li>
          </ul>

          <h3>2014</h3>

          <ul>
            <li v-for="item in papers2014" class="item animated zoomIn">
              {{item}}
            </li>
          </ul>

          <h3>2013</h3>

          <ul>
            <li v-for="item in papers2013" class="item animated zoomIn">
              {{item}}
            </li>
          </ul>

          <h3>2012</h3>

          <ul>
            <li v-for="item in papers2012" class="item animated zoomIn">
              {{item}}
            </li>
          </ul>

          <h3>2011</h3>

          <ul>
            <li v-for="item in papers2011" class="item animated zoomIn">
              {{item}}
            </li>
          </ul>

                   <el-divider><i class="el-icon-copy-document"></i></el-divider>

          <h1>获得奖项</h1>

          <ul>
            <li v-for="item in awards" class="item">
              {{item}}
            </li>
          </ul>
        </el-col>
      </el-row>
    </el-main>


    <myfooter></myfooter>
  </el-container>
</template>
<script>
  import myheader from '~/components/myheader.vue'
  import myfooter from '~/components/myfooter.vue'

  export default {
    name: "achievements",
    data() {
      return {
        papers2021: [
          'Yixiao Lan, Yuan Liu, Boyang Li, Chunyang Miao. Proof of Learning (PoLe): Empowering Machine Learning with Consensus Building on Blockchains (Demo).The 35th AAAI Conference IEEE International Conference on Artificial Intelligence (AAAI), 2021, Demo paper CCF A类'
        ],
        papers2020: [
          'Zhengpeng Ai, Yuan Liu, Xingwei Wang. ABC: An auction-based Blockchain Consensus-Incentive Mechanism. The 26th IEEE International Conference on Parallel and Distributed Systems (ICPADS 2020), 2020 (Invited). CCF C类',
          'Yuan Liu, Zhengpeng Ai, Mengmeng Tian, Guibing Guo, Linying Jiang. DSBFT: A Delegation based Scalable Byzantine False Tolerance Consensus Mechanism. The 20th International Conference on Algorithms and Architectures for Parallel Processing (ICA3PP 2020). CCF C类',
          'Yixiao Lan, Yuan Liu, Boyang Li. Proof of Learning (PoLe): Empowering Machine Learning with Consensus Building on Blockchains. in CoRR abs/2007.15145, 2020',
          'Yuan Liu, Shuai Sun, Zhengpeng Ai, Shuangfeng Zhang, Zelei Liu, Han Yu. FedCoin: A Peer-to-Peer Payment System for Federated Learning. in arXiv, 2020',
          'Shuangfeng Zhang, Yuan Liu, Xingren Chen, Xin Zhou. A POMDP-based Method for Analyzing Blockchain System Security Against Long Delay Attack (Extended Abstract). The 19th International Conference on Autonomous Agents and Multiagent Systems (AAMAS 2020) .CCF B类',
          'Zhizhao Zhang, Tianzhi Yang, Yuan Liu. SABlockFL: A Blockchain-based Smart Agent System Architecture and Its Application in Federated Learning. International Journal of Crowd Science, 2020',
        ],
        papers2019: [
          'Qianwei Zhuang, Yuan Liu Lisi Chen, Zhengpeng Ai. Proof of Reputation: A Reputation-based Consensus Protocol for Blockchain based Systems. 2019 International Electronics Communication Conference (IECC), 2019. EI',
          'Tianzhi Yang, Yuan Liu. A Smart Agent based Blockchain Applicaiton Architecture. The 4th International Conference on Crowd Science and Engineering(ICCSE), 2019. EI ',
          'Shuai Sun, Yuan Liu, Xingren Chen, Guibing Guo. A Privacy-preserving and Robust Reputation System based on Blockchain. The 17th IEEE International Symposium on Parallel and Distributed Processing with Applications(ISPA) 2019.CCF C类',
          'Shuangfei Zhang, Yuan Liu, Xingren Chen. BIT Problem: Is There A Trade-off in the Performances of Blockchain Systems?. 2019 International Conference on Blockchain and Trustworthy Systems (BlockSys), 2019. EI',
        ],
        papers2018: [
          'Zheng Zhao, Yuan Liu. A Blockchain based Identity Management System Considering Reputation. 2nd IEEE International Conference on Computer Systems, Electronics and Control(ICCSEC), 2018.EI ',
          'Jin Bai, Yuan Liu. A Reputation Model Considering Buyer Subjectivity and Product Return Behavior. 2nd IEEE International Conference on Computer Systems, Electronics and Control(ICCSEC), 2018. EI',
          'Guibing Guo, Tianzhi Yang, Yuan Liu, Search Engine Based Proper Privacy Protection Scheme. IEEE Access 6: 78551-78558,2018. SCI 1区',
        ],
        papers2017: [
          'Yuan Liu, Jie Zhang, Quanyan Zhu, Xingwei Wang. CONGRESS: A Hybrid Reputation System for Coping with Rating Subjectivity, IEEE Transactions on Computational Social Systems, 2017. EI',
          'Yuan Liu, Zheng Zhao, Guibing Guo, Xingwei Wang, Shuang Wang. An Identity Management System Based on Blockchain, 15th Annual Conference on Privacy, Security and Trust (PST), 2017.EI',
          'Yuan Liu, Usman Shittu Chidawa, Guibing Guo, Xingwei Wang, Shuang Wang. A Reputation Model for Aggregating Ratings based on Beta Distribution Function. 2nd International Conference on Crowd Science and Engineering (ICCSE), 2017.EI',
          'Yuan Liu, Jin Bai, Guibing Guo, Xingwei Wang, Zhenhua Tan. A Reputation Model Considering Repurchase Behavior and Mechanism Design to Promote Repurchase. The 10th International Conference on Security, Privacy and Anonymity in Computation, Communication and Storage (SpaCCS), 2017.EI',
          'Ning Luo, Huaxun Deng, Linfeng Zhao, Yuan Liu, Xingwei Wang, Zhenhua Tan. Multi-aspect Feature based Neural Network Model in Detecting Fake Reviews. 4th International Conference on Information Science and Control Engineering (ICISCE), 2017.EI',
          'Huaxun Deng, Lingfeng Zhao, Ning Luo, Yuan Liu, Xingwei Wang, Zhenhua Tan, Shuang Wang, and Fucai Zhou. Semi-supervised Learning based Fake Review Detection. IEEE International Symposium on Parallel and Distributed Processing with Applications (ISPA), 2017.EI',
        ],
        papers2016: [
          'Zhenhua Tan, Jingyu Ning, Yuan Liu, Xingwei Wang, Guangming Yang, Wei Yang. ECRModel: an Elastic Collusion-based Rumor-Propagation Model in Online Social Networks, IEEE Access, 2016. SCI 一区',
          'Yuan Liu, Chunyan Miao. A Survey of Incentives and Mechanism Design for Human Computation Systems, CoRR abs/1602.03277, 2016.',
          'Qiong Wu, Siyuan Liu, Chunyan Miao, Yuan Liu, Cyril Leung. A Social Curiosity Inspired Recommendation Model to Improve Precision, Coverage and Diversity. In Proceedings of the 2016 IEEE/WIC/ACM International Conference on Web Intelligence (WI), 2016.EI',
          'Zhenhua Tan, Yicong Niu, Yuan Liu, and Guangming Yang. A Novel Trust Model Based on SLA and Behavior Evaluation for Clouds. In Proceedings of the 2016 Annual Privacy, Security and Trust Conference (PST) 2016 EI',

        ],
        papers2015: [
          'Yuan Liu, Jie Zhang, Bo An, Sandip Sen. A simulation framework for measuring robustness of incentive mechanisms and its implementation in reputation systems, Journal of Autonomous Agents and Multi-agent Systems (JAAMAS), 2015.CCF B类',
          'Siyuan Liu, Chunyan Miao, Yuan Liu, Hui Fang, Han Yu, Jie Zhang, Yueting Chai, Cyril Leung: A Reputation Revision Mechanism to Mitigate the Negative Effects of Misreported Ratings. ICEC 2015: 7:1-7:8 EI',
          'Siyuan Liu, Chunyan Miao, Yuan Liu, Han Yu, Jie Zhang, Cyril Leung, An Incentive Mechanism to Elicit Truthful Opinions for Crowdsourced Multiple Choice Consensus Tasks. WI-IAT (2) 2015: 96-103 EI',
        ],
        papers2014: [
          'Yuan Liu “Towards the Design of Robust Incentive Mechanisms to Address Subjectivity and Dishonesty Problems in Agent Reporting”, PhD Thesis ',
          'Yuan Liu, Jie Zhang, Han Yu, and Chunyan Miao “ Reputation-aware Continuous Double Auction ”, in proceedings of 28th International Conference AAAI Conference on Artificial Intelligence, Student Poster Program, 2014 CCF A类',
          'Yuan Liu, Siyuan Liu, Hui Fang, Jie Zhang, Han Yu, and Chunyan Miao “ RepRev: Mitigating the Negative Effects of Misreported Ratings ”, in proceedings of 28th International Conference AAAI Conference on Artificial Intelligence, Student Poster Program, 2014 CCF A类',
          'Yuan Liu, Jie Zhang, An Bo, and Sandip Sen “ A Practical Robustnesss Measure of Incentive Mechanisms ”, in proceedings of 13th International Conference on Autonomous Agents and Multiagent Systems (AAMAS), 2014 CCF B类 ',
          'Zeinab Noorian, Mohsen Mohkami, Yuan Liu, Hui Fang, Julita Vassileva, and Jie Zhang. SocialTrust: Adaptive Trust Oriented Incentive Mechanism for Social Commerce. In Proceedings of the 2014 IEEE/WIC/ACM International Conference on Web Intelligence, 2014 EI',

        ],
        papers2013: [
          'Yuan Liu, Jie Zhang “An incentive mechanism designed for e-marketplaces with limited inventory”, Electronic Commerce Research and Applications, 2013. SCI 二区',
          'Zeinab Noorian, Jie Zhang, Yuan Liu, Stephen Marsh, and Michael Fleming “ Trust-Oriented Buyer Strategies for Seller Reporting and Selection in Competitive Electronic Marketplaces ”, Journal of Autonomous Agents and Multi-Agent Systems (JAAMAS), 2013. CCF B类',
          'Yuan Liu “Towards the Design of a Robust Incentive Mechanism for E-Marketplaces with Limited Inventory”, in International Joint Conference on Autonomous Agents and Multiagent Systems (AAMAS), Doctorial Consortium, 2013, pages 1441-1442. CCF B类 ',
          'Yuan Liu, Jie Zhang “Robustness Evaluation of Incentive Mechanisms”, in International Joint Conference on Autonomous Agents and Multiagent Systems (AAMAS), 2013 (short paper), pages 1293-1294. CCF B类',
        ],
        papers2012: [
          'Yuan Liu, Qin Li, Jie Zhang. “Coalition Formation Game based Reputation System”, in ACM EC Workshop on Incentives and Trust in E-Commerce (WIT-EC2012). EI ',
          'Yuan Liu, Jie Zhang, Qin Li. “Design of an Incentive Mechanism to Promote Honesty in E-marketplaces with Limited Inventory”, in the proceedings of 14th Annual International Conference on Electronic Commerce, Singapore (ICEC2012), pages 54-61. EI',
          'Yuan Liu, Jie Zhang, Qin Li. “An Incentive Mechanism to Promote Honesty in E-marketplaces with Limited Inventory ”, in the proceedings of 6th IFIP WG 11.11 International Conference on Trust Management, Surat, India (IFIPTM2012), pages 209-216. EI',
        ],
        papers2011: [
          'Yuan Liu, Jie Zhang, Quanyan Zhu. “Design of a Reputation System based on Dynamic Coalition Formation”, in the proceedings of Third International Conference on Social Informatics, Singapore (SocInfo2011), pages 135-144. EI',
        ],
        books: [
          'Yuan Liu, Zhengpeng Ai, Shuai Sun, Zelei Liu, Han Yu. FedCoin: A Peer-to-Peer Payment System for Federated Learning. In Book: Yang Q., Fan L., Yu H. (eds) Federated Learning. Lecture Notes in Computer Science, vol 12500. Springer, Cham. https://doi.org/10.1007/978-3-030-63076-8_9',
          'Yuan Liu, Shuangfeng Zhang, Xingren Chen. Blockchain Security Analysis: A POMDP-Based Approach for Analyzing Blockchain System Security Against the Long Delay Attack. Eliva Press. 2020, ISBN: 978-1952751332'
        ],
        awards: [
          '2019年国际大学生数学建模竞赛二等奖',
          '“建行杯”第五届辽宁省“互联网+”大学生创新创业竞赛银奖',
          '2019年中国“互联网+”大学生创新创业竞赛东北大学校一等奖',
          '2020年全国大学生英语竞赛国家级三等奖'
        ]
      }
    },
    components: {
      myheader,
      myfooter
    }
  }
</script>

<style scoped>

  .item {
    margin: 10px 0;
  }


  li {
    color: #606266;
    text-align: justify;
    text-justify: inter-ideograph
  }


</style>



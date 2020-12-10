<template>

  <el-container direction="vertical">
    <myheader index="/"></myheader>

    <el-main class="main-content">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :xs="20" :sm="18" :md="16" :lg="14" :xl="14">

          <div class="group-wrapper animated bounceInDown">
            <el-image class="group-bg" fit="fill" src="/group.jpg"></el-image>
            <el-image class="group-ph" src="/group.jpg"></el-image>
          </div>

          <el-divider></el-divider>

          <h1>区块链研究组</h1>
          <p style="text-indent:2em">
            区块链研究组成立于2015年，致力于下一代海量、异构数据的分布式存储、管理、查询、分析和机器学习系统与算法的研究和应用。通过并行与分布式数据处理和云上系统资源管理，多场景、多模态、异构计算引擎融合统一系统智能与自治化，数据安全隐私计算等关键技术，为各行业、各场景提供高效的算法支持和安全、可靠、强有力的计算引擎。

            研究组负责人刘园副教授，1986年出生于吉林长春，博士，副教授，信息安全系主任。2015年10月通过东北大学引进人才的方式任教于软件学院信息安全系。 2014年11月毕业于新加坡南洋理工大学计算机工程学院，获得博士学位，导师是 Associate professor Jie Zhang。 2010年7月毕业于哈尔滨工业大学，获得学士学位，导师肖立伊教授。
          </p>


          <el-divider><i class="el-icon-lock"></i></el-divider>

          <h1>研究方向</h1>

          <ul>
            <li>
              <h4>共识协议</h4>
              <p>
                针对混合共识方案、新型共识协议的工程实践、共识协议的性能提升等。混合共识方案主要基于学术界的最新成果提出创新与改进。新型共识协议的工程实践包括基于随机化算法的共识协议和基于DAG模式的共识协议。共识协议的性能提升，是指通过并行化处理传统共识协议，在维持协议正确性与活性的同时，高效利用多核机器的性能，进而使得传统BFT协议的性能获得提升，并适用于其他共识协议。
              </p>
            </li>

            <li>
              <h4>密码学安全与隐私保护</h4>
              <p>
                研究主要围绕账户模型下的隐私保护、无setup零知识证明、全同态加密算法的设计与应用。账户模型下的隐私保护需要同时满足：相关方和有权限的成员可看到信息的明文；不相关方从账本上只能看到无意义的加密信息；共识节点能够在加密信息上直接对交易合法性做判断，并对账户做相应操作。无setup零知识证明是对现有的zk-SNARK方案需要setup情形的改进。全同态加密是指在不解密前提下对密文进行任何原本在明文可行的运算，是同态加密算法的改进。
              </p>
            </li>

            <li>
              <h4>区块链技术结合可信执行环境</h4>
              <p>
                研究基于可信硬件的新型区块链架构。其基本思路是基于可信硬件，为解决机密保护和计算复杂性问题等提供通用的高性能解决方案。
              </p>
            </li>

            <li>
              <h4>跨链协议</h4>
              <p>
                包括跨链数据检索和跨链资产交换。跨链数据检索可以为监管方在多链的条件下提供更强大的监管能力；跨链资产交换是去中心信任的原子交换。
              </p>
            </li>

            <li>
              <h4>智能合约语言与整体安全性分析</h4>
              <p>
                对现有智能合约体系的安全性分析扫描，并具体实践于自主实现区块链平台。目标实现对智能合约语言做形式化验证与安全性分析，从根本上解决智能合约安全性问题，也包括对区块链整体协议做形式化分析，提高区块链技术的安全性。
              </p>
            </li>

            <li>
              <h4>区块链技术与IoT结合</h4>
              <p>
                二者结合能够解决区块链资产在物理世界和数字世界的锚定问题。利用IoT技术，可以将区块链技术在数字世界中定义的资产形态与物理实体打通。
              </p>
            </li>

            <li>
              <h4>区块链技术与安全多方计算结合</h4>
              <p>
                研究在缺乏可信第三方的情形下安全计算约定函数的方法，在需要秘密共享和隐私保护的场景具有重要意义。目标是打造基于个人隐私数据的计算及交易平台，赋能未来数字服务。目前已经研发出保护隐私的安全数据统计和安全模型训练及预测。
              </p>
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
    components: {
      myheader,
      myfooter
    }
  }
</script>

<style scoped>


  h4 {
    margin: 20px 0 10px 0;
  }

  p {
    line-height: 1.7;
    color: #606266;
  }


  .group-wrapper {
    height: 400px;
    width: 100%;
    margin: 10px auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .group-bg {
    height: 100%;
    width: 100%;
    position: absolute;
    filter: blur(20px);
    transform: scale(1.1);
  }

  .group-ph {
    height: 400px;
    width: 800px;
  }


</style>

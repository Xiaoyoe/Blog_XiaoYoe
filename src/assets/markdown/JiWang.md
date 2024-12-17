## 实验一交换机基本配置
**一、建立拓扑：**

![](https://cdn.nlark.com/yuque/0/2024/png/50372252/1733187993376-c0b281c4-e7f2-4879-9e21-939db1b084cc.png)

注意，请在PC上完成，对新购买的交换机（LSW1）的基本配置

**二、具体要求如下：**

（1）查看交换机的版本等信息的命令；

<Huawei>  <font style="color:#117CEE;">display version</font>

（2）进入交换机的系统视图的命令；

<Huawei> <font style="color:#117CEE;">sy</font>

（3）关闭交换机消息提示功能的命令；

[Huawei]	<font style="color:#117CEE;">un in en</font>

（4）配置交换机的名称为S1-学号最后3位的命令；

[Huawei]<font style="color:#117CEE;">	sy S1-324</font>

（5）按照图中给出的地址信息，配置交换机逻辑接口vlanif 1的IP地址及子网掩码的命令；

[S1-007-Vlanif1]  <font style="color:#117CEE;">interface v1</font>

（6）显示当前视图下的配置信息

[S1-007-Vlanif1]  <font style="color:#117CEE;">display this</font>

（7）显示当前运行的配置信息

<font style="color:#117CEE;">   display cu</font>

（8）保存交换机的配置的命令；

<S1> <font style="color:#117CEE;">save</font>

（9）连接交换机和PC1的线缆是什么？分别连接PC和交换机的哪个端口？

**<font style="color:red;">答：CTL线 连接PC的串口和交换机的Console端口</font>**

（10）配置PC2的IP地址等信息，从PC2访问交换机。

**三、参考答案：**

（<font style="color:black;">1</font><font style="color:black;">）</font><font style="color:black;">display version</font>

<font style="color:black;">（</font><font style="color:black;">2</font><font style="color:black;">）</font><font style="color:black;">system-view</font>

<font style="color:black;">（</font><font style="color:black;">3</font><font style="color:black;">）</font><font style="color:black;">undo info-center enable</font>

<font style="color:black;">（</font><font style="color:black;">4</font><font style="color:black;">）</font><font style="color:black;">sysname S1-007</font>

<font style="color:black;">（</font><font style="color:black;">5</font><font style="color:black;">）</font><font style="color:black;">interface</font><font style="color:black;">  </font><font style="color:black;">vlanif1</font>

<font style="color:black;">ip address 19.16.1.254 24</font>

<font style="color:black;">（</font><font style="color:black;">6</font><font style="color:black;">）</font><font style="color:black;">display this </font>

<font style="color:black;">（</font><font style="color:black;">7</font><font style="color:black;">）</font><font style="color:black;">display current-configuration</font>

<font style="color:black;">（</font><font style="color:black;">8</font><font style="color:black;">）</font><font style="color:black;">save</font>

（9）CTL线，分别连接PC的串口和交换机的Console端口。



## 实验二路由器基本配置
**一、建立拓扑：**

![](https://cdn.nlark.com/yuque/0/2024/png/50372252/1733188007069-9f3ac8fa-7de7-4abe-b332-8022510e2eaa.png)

注意，请在PC上完成，对新购买的路由器（R1）的基本配置

**二、具体要求如下：**

（1）查看路由器的版本等信息的命令；

<Huawei> <font style="color:#117CEE;">display version</font>

（2）进入路由器的系统视图的命令；

<Huawei> <font style="color:#117CEE;">sy</font>

（3）关闭路由器消息提示功能的命令；

[Huawei] <font style="color:#117CEE;">un in en</font>

（4）配置路由器的名称为R1-学号最后3位的命令；

[Huawei] <font style="color:#117CEE;">sy R1-324</font>

（5）进入到R1接口g0/0/0命令；

[R1-007-GigabitEthernet0/0/0] <font style="color:#117CEE;">interface g0/0/0</font>

（6）按照图中给出的地址信息，配置路由器g0/0/0接口的IP地址及子网掩码的命令；

[R1--GigabitEthernet0/0/0] <font style="color:#117CEE;">ip address 10.1.1.254 24</font>

（7）显示当前视图下的运行配置信息的命令；

[R1--GigabitEthernet0/0/0] <font style="color:#117CEE;">display this</font>

（8）退出子接口视图模式的命令；<font style="color:#117CEE;">quit</font>

（9）查看当前所有运行配置信息的命令；<font style="color:#117CEE;">display cu</font>

（10）查看路由器的接口的IP地址信息的命令；<font style="color:#117CEE;">display ip interface g0/0/0</font>

（11）保存路由器的配置的命令；<font style="color:#117CEE;"></font>

<R1-007> <font style="color:#117CEE;">save</font>

**三、参考答案：**

<font style="color:black;">（</font><font style="color:black;">1</font><font style="color:black;">）</font><font style="color:black;">display version</font>

<font style="color:black;">（</font><font style="color:black;">2</font><font style="color:black;">）</font><font style="color:black;">system-view</font>

<font style="color:black;">（</font><font style="color:black;">3</font><font style="color:black;">）</font><font style="color:black;">undo info-center enable</font>

<font style="color:black;">（</font><font style="color:black;">4</font><font style="color:black;">）</font><font style="color:black;">sysname R1-007</font>

<font style="color:black;">（</font><font style="color:black;">5</font><font style="color:black;">）</font><font style="color:black;">interface g 0/0/0</font>

<font style="color:black;">（</font><font style="color:black;">6</font><font style="color:black;">）</font><font style="color:black;">ip address 10.1.1.254 24</font>

<font style="color:black;">（</font><font style="color:black;">7</font><font style="color:black;">）</font><font style="color:black;">display this</font>

<font style="color:black;">（</font><font style="color:black;">8</font><font style="color:black;">）</font><font style="color:black;">quit</font>

<font style="color:black;">（</font><font style="color:black;">9</font><font style="color:black;">）</font><font style="color:black;">display current-configuration</font>

<font style="color:black;">（</font><font style="color:black;">10</font><font style="color:black;">）</font><font style="color:black;">display ip interface g 0/0/0</font>

<font style="color:black;">（</font><font style="color:black;">11</font><font style="color:black;">）</font><font style="color:black;">save</font>



## 实验三交换机VLAN划分
**一、实验拓扑**

![](https://cdn.nlark.com/yuque/0/2024/png/50372252/1733188027758-0264b184-7192-425d-bd61-06dd3161794d.png)

**二、配置要求**

1、修改交换机3名称为S3-学号最后3位，交换机4的名称为S4-学号最后3位。

<font style="color:#117CEE;">sy S3-324</font>

<font style="color:#117CEE;">sy S4-324</font>

2、分别在交换机S3和S4上，创建VLAN100和VLAN200

<font style="color:#117CEE;">vlan 100</font>

<font style="color:#117CEE;">vlan 200</font>

3、按照拓扑图，将交换机S3和S4的e0/0/1和e0/0/2接口划分到对应的VLAN。

<font style="color:#117CEE;">interface e0/0/1</font>

<font style="color:#117CEE;">port link-type access</font>

<font style="color:#117CEE;">port default vlan 100</font>

<font style="color:#117CEE;">interface e0/0/2</font>

<font style="color:#117CEE;">port link-type access</font>

<font style="color:#117CEE;">port default vlan 200</font>

4、为了实现跨交换机，同一个VLAN间的通信，还要如何配置交换机3和交换机4。请给出相应的命令？

<font style="color:#117CEE;">将两个交换机互相连接的端口类型配置为 trunk，并且设置此端口能允许哪些VLAN的数据包通过</font>

<font style="color:#117CEE;">int g0/0/0</font>

<font style="color:#117CEE;">port link-type trunk</font>

<font style="color:#117CEE;">port trunk allow-pass vlan 100 200</font>

5、保存两台交换机的配置信息，查看VLAN的配置信息命令。

<font style="color:#117CEE;">quit</font>

<font style="color:#117CEE;">display port vlan</font>

<font style="color:#117CEE;">save</font>

6、参照拓扑，配置所有的PC。

7、所有配置完成后，PC6和PC7能否通信，原因？

<font style="color:#117CEE;">不能 不在同一个局域网内 他们处于各自的局域网中 不同的广播域 在没有路由的情况下 不同vlan间的设备无法进行通信 因为交换机不会将广播或者单流量进行转发到另一个vlan（局域网）</font>

为了使他们能够通信 要将交换机3配置vlan间路由 或者连接一个支持vlan间路由的路由器来转发两个vlan之间的流量 这样能实现通信

<font style="color:#117CEE;">配置交换机（三层交换机）的路由信息 以S3为例：</font>

<font style="color:#D22D8D;">配置vlan100的网关为：172.10.100.254 24</font>

<font style="color:#D22D8D;">配置vlan200的网关为：172.10.200.254 24</font>

<font style="color:#117CEE;">int vlan 100</font>

<font style="color:#117CEE;">ip address 172.10.100.254 24</font>

<font style="color:#117CEE;">int vlan 200 </font>

<font style="color:#117CEE;">ip address 172.10.200.254 24</font>

<font style="color:#117CEE;">quit</font>

PC6和PC8能否通信，原因？

<font style="color:#117CEE;">可以 在同一个局域网内 并且交换机3和4的端口设置正确 trunk能允许vlan的数据包通过</font>

8、在PC6上查看ARP表内容的命令

<font style="color:#117CEE;">arp -a</font>

给出您的所有配置命令

**三、参考答案：**

（1）<font style="color:black;"><Huawei></font><font style="color:#117CEE;">system-view</font>

<font style="color:black;">[Huawei]</font><font style="color:#117CEE;">undo info-center enable</font>

<font style="color:black;">[Huawei]</font><font style="color:#117CEE;">sysname S3-007</font>

（2）[<font style="color:black;">S3-007]</font><font style="color:#117CEE;">vlan 100</font>

<font style="color:black;">   [S3-007]</font><font style="color:#117CEE;">vlan 200</font>

<font style="color:black;">或</font>

<font style="color:black;">[S4-007]vlan </font><font style="color:#117CEE;">batch</font><font style="color:black;"> 100 200 ##批量创建vlan 100 和vlan200</font>

<font style="color:black;">（</font><font style="color:black;">3</font><font style="color:black;">）以</font><font style="color:black;">S3-007</font><font style="color:black;">为例</font>

<font style="color:black;">[S3-007]</font><font style="color:#117CEE;">int e 0/0/1</font>

<font style="color:black;">[S3-007-Ethernet0/0/1]</font><font style="color:#117CEE;">port link-type access</font><font style="color:black;"> #接口的类型设置为access，连接交换机和主机</font>

<font style="color:black;">[S3-007-Ethernet0/0/1]</font><font style="color:#117CEE;">port default vlan 100</font><font style="color:black;"> #接口默认属于vlan 100</font>

<font style="color:black;">[S3-007-Ethernet0/0/1]</font><font style="color:#117CEE;">int e 0/0/2</font>

<font style="color:black;">[S3-007-Ethernet0/0/2]</font><font style="color:#117CEE;">port link-type access</font>

<font style="color:black;">[S3-007-Ethernet0/0/2]</font><font style="color:#117CEE;">port default vlan 200</font>

（4）为了实现同一vlan间的主机能跨交换机通信，需要将两个交换机互相连接的端口类型配置为 trunk，并且设置此端口能允许哪些VLAN的数据包通过。以S3为例：

<font style="color:black;"> [S3-007]</font><font style="color:#117CEE;">int g 0/0/1</font>

<font style="color:black;">[S3-007-GigabitEthernet0/0/1]</font><font style="color:#117CEE;">port link-type trunk</font><font style="color:black;"> #接口的类型设置为trunk，连接两个交换机</font>

<font style="color:black;">[S3-007-GigabitEthernet0/0/1]</font><font style="color:#117CEE;">port trunk allow-pass vlan 100 200</font><font style="color:black;"> #允许VLAN 100和VLAN 200的数据包通过此端口</font>

<font style="color:black;">[S3-007-GigabitEthernet0/0/1]</font><font style="color:#117CEE;">q</font>

（5）[<font style="color:black;">S3-007]</font><font style="color:#117CEE;">display port vlan</font>

<font style="color:black;"><S3-007></font><font style="color:#117CEE;">save</font>

（7）PC6和PC8能正常通信，因为两者属于同一个VLAN，并且交换机3和交换机4的端口设置正确。

PC6和PC7不能ping通的原因是交换机3上没有配置路由功能来转发VLAN100和VLAN200之间的流量。由于PC6属于VLAN100，而PC7属于VLAN200，它们处于不同的广播域中。在没有路由的情况下，不同VLAN间的设备无法直接通信，因为交换机不会将一个VLAN的广播或单播流量转发到另一个VLAN。为了使PC6和PC7能够通信，需要在交换机3上配置VLAN间路由，或者连接一个支持VLAN间路由的路由器来转发两个VLAN之间的流量。这样，通过路由功能，不同VLAN的设备就能够互相通信了。

若要实现PC6和PC7的ping通，此时我们的交换机是三层交换机，所以可以在交换机上配置VLAN的路由信息，以S3为例，我们配置VLAN100的网关是172.10.100.254/24,VLAN200的网关是172.10.200.254/24.

<font style="color:black;">[S3-007]</font><font style="color:#117CEE;">int vlan 100</font>

<font style="color:black;">[S3-007-Vlanif100]</font><font style="color:#117CEE;">ip address 172.10.100.254 24</font>

<font style="color:black;">[S3-007-Vlanif100]</font><font style="color:#117CEE;">int vlan 200</font>

<font style="color:black;">[S3-007-Vlanif200]</font><font style="color:#117CEE;">ip address 172.10.200.254 24</font>

<font style="color:black;">[S3-007-Vlanif200]</font><font style="color:#117CEE;">q</font>

再给PC6和PC8配置上对应的网关，此时PC6 和 PC8可正常通信。

（8）<font style="color:#117CEE;">arp -a</font>

## 实验四：静态路由配置实验
**一、建立拓扑：**

![](https://cdn.nlark.com/yuque/0/2024/png/50372252/1733188057143-36836004-eedc-4e13-96b1-5cf5f31715f0.png)

**二、具体要求如下：**

（1）请您配置PC10和PC11的IP地址、子网掩码、网关信息。

（2）配置R2的名称为R2-学号最后3位，配置R3的名称为R3-学号最后3位，并配置R2和R3两个接口的IP地址、子网掩码信息。

<font style="color:#117CEE;">sy</font>

<font style="color:#117CEE;">un in en</font>

<font style="color:#117CEE;">sy R2-324</font>

<font style="color:#117CEE;">interface g0/0/0</font>

<font style="color:#117CEE;">ip address 12.1.1.1 24</font>

<font style="color:#117CEE;">interface g0/0/1</font>

<font style="color:#117CEE;">ip address 1.1.1.1 24</font>

<font style="color:#1DC0C9;">sy R3-324</font>

<font style="color:#1DC0C9;">interface g0/0/0</font>

<font style="color:#1DC0C9;">ip address 12.1.1.2 24</font>

<font style="color:#1DC0C9;">interface g0/0/1</font>

<font style="color:#1DC0C9;">ip address 1.1.1.1 24</font>

（3）分别配置R2和R3的静态路由信息，并查看两个路由器的路由表信息，最后保存R2的配置。

<font style="color:#117CEE;">ip route-static 2.1.1.0 24 12.1.1.2</font>

<font style="color:#117CEE;">save</font>

<font style="color:#1DC0C9;">ip route-static 1.1.1.0 24 12.1.1.1</font>

<font style="color:#1DC0C9;">save</font>

（4）测试PC10与PC11是否能ping通  yes

**三、参考答案：**

（2）

<font style="color:black;">[R2-007]int g 0/0/1</font>

<font style="color:black;">[R2-007-GigabitEthernet0/0/1]ip address 1.1.1.1 24</font>

<font style="color:black;">[R2-007-GigabitEthernet0/0/1]int g 0/0/0</font>

<font style="color:black;">[R2-007-GigabitEthernet0/0/0]ip addres 12.1.1.1 24</font>

<font style="color:black;"><Huawei>system-view</font>

<font style="color:black;">[Huawei]undo info-center enable</font>

<font style="color:black;">[Huawei]sysname R3-007</font>

<font style="color:black;">[R3-007]int g 0/0/1</font>

<font style="color:black;">[R3-007-GigabitEthernet0/0/1]ip address 2.1.1.1 24</font>

<font style="color:black;">[R3-007-GigabitEthernet0/0/1]int g 0/0/0</font>

<font style="color:black;">[R3-007-GigabitEthernet0/0/0]ip address 12.1.1.2 24</font>

<font style="color:black;">（</font><font style="color:black;">3</font><font style="color:black;">）</font>

<font style="color:black;">[R2-007]ip route-static 2.1.1.0 24 12.1.1.2</font>

<font style="color:black;"><R2-007>save</font>

<font style="color:black;">[R3-007]ip route-static 1.1.1.0 24 12.1.1.1</font>

<font style="color:black;"><R</font><font style="color:black;">3</font><font style="color:black;">-007>save</font>

## 实验五：动态路由配置实验
**一、建立拓扑：**

![](https://cdn.nlark.com/yuque/0/2024/png/50372252/1733188064969-249f0292-0c43-465c-af76-b908337a8b22.png)

**二、具体要求如下：**

修改R4、R5、R6路由器的名字为R4-学号最后3位、R5学号最后3位、R6-学号最后3位。

（1）请参照拓扑图，在R4、R5、R6上完成接口IP地址、子网掩码信息的配置。

**R4:**

<font style="color:#117CEE;">sy</font>

<font style="color:#117CEE;">sy R4-324</font>

<font style="color:#117CEE;">un in en</font>

<font style="color:#117CEE;">interface g0/0/0</font>

<font style="color:#117CEE;">ip address 172.16.3.1 24</font>

<font style="color:#117CEE;">[R4-007-GigabitEthernet0/0/0]ip address 172.16.3.1 24</font>

<font style="color:#117CEE;">[R4-007-GigabitEthernet0/0/0]int s 0/0/0</font>

**R5:**

<font style="color:#117CEE;">sy</font>

<font style="color:#117CEE;">sy R5-324</font>

<font style="color:#117CEE;">un in en</font>

<font style="color:#117CEE;">interface g0/0/0</font>

<font style="color:#117CEE;">ip address 172.16.1.1 24</font>

<font style="color:#117CEE;">[R5-007-GigabitEthernet0/0/0]int s 0/0/0</font>

<font style="color:#117CEE;">[</font><font style="color:#117CEE;">R5-007</font><font style="color:#117CEE;">-Serial0/0/0]ip address 172.16.2.1 24</font>

<font style="color:#117CEE;">[</font><font style="color:#117CEE;">R5-007</font><font style="color:#117CEE;">-Serial0/0/0]int s 0/0/1</font>

<font style="color:#117CEE;">[R5-007-Serial0/0/1]ip address 192.168.1.1 24</font>

**R6:**

<font style="color:#117CEE;">sy</font>

<font style="color:#117CEE;">sy R6-324</font>

<font style="color:#117CEE;">un in en</font>

<font style="color:#117CEE;">interface g0/0/0</font>

<font style="color:#117CEE;">ip address 172.16.2.1 24</font>

<font style="color:#117CEE;">[R6-007-GigabitEthernet0/0/0]int s 0/0/1</font>

<font style="color:#117CEE;">[R6-007-Serial0/0/1]ip address 192.168.1.2 24</font>

（2）请参照拓扑图，在PC12、PC13、PC14上配置IP地址、子网掩码、网关。

（3）请填写：

R4的两个直连网络地址是**<font style="color:red;">（172.16.3.0）和（172.16.1.0）</font>**。

R4有**<font style="color:red;">（3）</font>**个非直连网络，分别是**<font style="color:red;">（172.16.1.0）、（192.168.1.0）和（192.168.2.0）。</font>**

R4路由器到这几个非直连网络的**<font style="color:red;">下一跳是（192.168.2.1）。</font>**

（4）在R4、R5和R6路由器上配置动态路由协议rip V2，关闭自动汇总、宣告有类的直连网络地址。

<font style="color:#117CEE;">【R4】rip</font>

<font style="color:#117CEE;">version 2</font>

<font style="color:#117CEE;">network 172.16.0.0</font>

<font style="color:#117CEE;">【R5】rip</font>

<font style="color:#117CEE;">version 2</font>

<font style="color:#117CEE;">network 172.16.0.0</font>

<font style="color:#117CEE;">netwrok 192.168.1.0</font>

<font style="color:#117CEE;">【R6】rip</font>

<font style="color:#117CEE;">version 2</font>

<font style="color:#117CEE;">network 192.168.1.0</font>

<font style="color:#117CEE;">network 192.168.2.0</font>

<font style="color:#117CEE;"></font>

关闭自动汇总:<font style="color:#1DC0C9;background-color:rgb(245, 246, 248);"> RIP version 2 会关闭自动汇总功能</font>

`network 172.16.0.0`**<font style="color:#1DC0C9;background-color:rgb(245, 246, 248);"> 宣告有类的直连网络地址</font>**<font style="color:#1DC0C9;background-color:rgb(245, 246, 248);">：这个命令会告诉 RIP 宣布属于该网络的接口，参与 RIP 路由交换。</font>

（5）分别使用tracert和ping命令测试PC1与PC2的连通性。

（6）请写出四个动态路由协议

<font style="color:#DF2A3F;">RIP、OSFP、IS-IS、BGP</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(245, 246, 248);">这些协议都用于路由器之间动态交换路由信息，但它们有不同的工作原理、适用场景和优势：</font>

+ **<font style="color:rgb(51, 51, 51);background-color:rgb(245, 246, 248);">RIP</font>**<font style="color:rgb(51, 51, 51);background-color:rgb(245, 246, 248);">：简单、适用于小型网络，但扩展性差。</font>
+ **<font style="color:rgb(51, 51, 51);background-color:rgb(245, 246, 248);">OSPF</font>**<font style="color:rgb(51, 51, 51);background-color:rgb(245, 246, 248);">：适用于中型到大型企业网络，支持更复杂的网络拓扑和较快的收敛。</font>
+ **<font style="color:rgb(51, 51, 51);background-color:rgb(245, 246, 248);">IS-IS</font>**<font style="color:rgb(51, 51, 51);background-color:rgb(245, 246, 248);">：类似 OSPF，但主要用于运营商和大型网络，适应性更强。</font>
+ **<font style="color:rgb(51, 51, 51);background-color:rgb(245, 246, 248);">BGP</font>**<font style="color:rgb(51, 51, 51);background-color:rgb(245, 246, 248);">：用于自治系统之间的路由，主要用于互联网，支持复杂的路由策略和大规模路由选择。</font>

  


**三、参考答案：**

（2）

<font style="color:black;">[R4-007]int g 0/0/0</font>

<font style="color:black;">[R4-007-GigabitEthernet0/0/0]ip address 172.16.3.1 24</font>

<font style="color:black;">[R4-007-GigabitEthernet0/0/0]int s 0/0/0</font>

<font style="color:black;">[R4-007-Serial0/0/0]ip address 172.16.2.2 24</font>

<font style="color:black;">[R4-007-Serial0/0/0]q</font>

<font style="color:black;">[</font><font style="color:black;">R5-007</font><font style="color:black;">]int g 0/0/0</font>

<font style="color:black;">[</font><font style="color:black;">R5-007</font><font style="color:black;">-GigabitEthernet0/0/0]ip address 172.16.1.1 24</font>

<font style="color:black;">[</font><font style="color:black;">R5-007</font><font style="color:black;">-GigabitEthernet0/0/0]int s 0/0/0</font>

<font style="color:black;">[</font><font style="color:black;">R5-007</font><font style="color:black;">-Serial0/0/0]ip address 172.16.2.1 24</font>

<font style="color:black;">[</font><font style="color:black;">R5-007</font><font style="color:black;">-Serial0/0/0]int s 0/0/1</font>

<font style="color:black;">[</font><font style="color:black;">R5-007</font><font style="color:black;">-Serial0/0/1]ip address 192.168.1.1 24</font>

<font style="color:black;">[</font><font style="color:black;">R5-007</font><font style="color:black;">-Serial0/0/1]q</font>

<font style="color:black;">[R6-007]int g 0/0/0</font>

<font style="color:black;">[R6-007-GigabitEthernet0/0/0]ip address 192.168.2.1 24</font>

<font style="color:black;">[R6-007-GigabitEthernet0/0/0]int s 0/0/1</font>

<font style="color:black;">[R6-007-Serial0/0/1]ip address 192.168.1.2 24</font>

<font style="color:black;">[R6-007-Serial0/0/1]q</font>

（3） 172.16.3.0  172.16.2.0

3  172.16.1.0 192.168.1.0 192.168.2.0

172.16.2.1

（4）

<font style="color:black;">[R4-007]rip</font>

<font style="color:black;">[R4-007-rip-1]version 2</font>

<font style="color:black;">[R4-007-rip-1]network 172.16.0.0</font>

<font style="color:black;">[</font><font style="color:black;">R5-007</font><font style="color:black;">]rip</font>

<font style="color:black;">[</font><font style="color:black;">R5-007</font><font style="color:black;">-rip-1]version 2</font>

<font style="color:black;">[</font><font style="color:black;">R5-007</font><font style="color:black;">-rip-1]network 172.16.0.0</font>

<font style="color:black;">[</font><font style="color:black;">R5-007</font><font style="color:black;">-rip-1]network 192.168.1.0</font>

<font style="color:black;">[R6-007]rip</font>

<font style="color:black;">[R6-007-rip-1]version 2</font>

<font style="color:black;">[R6-007-rip-1]network 192.168.1.0</font>

<font style="color:black;">[R6-007-rip-1]network 192.168.2.0</font>

（6）RIP OSPF IS-IS BGP









## 实验六：DHCP和DNS配置实验
**一、建立拓扑：**

![](https://cdn.nlark.com/yuque/0/2024/png/50372252/1733188070131-9054fc32-5ab9-4db5-926a-2cfe494a1f64.png)

**二、具体要求如下：**

（1）请参照拓扑图，将R7重命名为R7-学号最后3位，并配置R7的接口IP地址和子网掩码。

<font style="color:#117CEE;">sy</font>

<font style="color:#117CEE;">sy R7-324</font>

<font style="color:#117CEE;">un in en</font>

<font style="color:#117CEE;">interface g0/0/1</font>

<font style="color:#117CEE;">ip address 192.168.1.254 24</font>

<font style="color:#117CEE;">interface g0/0/2</font>

<font style="color:#117CEE;">ip address 192.168.2.254 24</font>

<font style="color:#117CEE;">q</font>

<font style="color:#117CEE;">save</font>

（2）开启路由器的DHCP功能，并创建一个名称为pool1的IP地址池，该地址池分配的IP地址块是192.168.1.0 24，网关地址是192.168.1.254，dns服务器地址是192.168.1.1，要求排除192.168.1.253这个地址。

<font style="color:#117CEE;">dhcp en				</font><font style="color:#74B602;">激活dhcp功能</font>

<font style="color:#117CEE;">ip pool pool1			       </font><font style="color:#74B602;">创建地址池IP</font>

<font style="color:#117CEE;">network 192.168.1.0 mask 24 </font><font style="color:#74B602;">配置地址池的网络号和掩码</font>

<font style="color:#117CEE;">gateway-list 192.168.1.254    </font><font style="color:#74B602;">配置网关地址</font>

<font style="color:#117CEE;">excluded-ip-address 192.168.1.253   </font><font style="color:#74B602;">进行地址排除 不参与自动配置</font>

<font style="color:#117CEE;">dns-list 192.168.1.1 		</font><font style="color:#74B602;">配置dns信息</font>

<font style="color:#117CEE;">quit</font>

<font style="color:#117CEE;"></font>

（3）进入R7相应接口，分别开启全局地址池和接口地址池的功能。开启g0/0/1接口，采用全局地址池的DHCP Server功能；开启路由器g0/0/2接口，采用接口地址池的DHCP Server功能。

<font style="color:#117CEE;">interface g0/0/1</font>

<font style="color:#117CEE;">dhcp select global</font>

<font style="color:#117CEE;">q</font>

<font style="color:#117CEE;">interface g0/0/2</font>

<font style="color:#117CEE;">dhcp select interface</font>

<font style="color:#117CEE;">q</font>

<font style="color:#117CEE;">save</font>

（4）开启主机的DHCP功能，使用ipconfig查看每个主机是否自动获得IP信息，获得的配置信息又哪些？

（5）全局地址池和接口地址池有什么区别？

+ **<font style="color:#74B602;">全局地址池</font>**<font style="color:#74B602;">：为整个设备或网络提供动态分配的 IP 地址池，通常用于 DHCP 服务器分配给多个客户端。</font>
+ **<font style="color:#74B602;">接口地址池</font>**<font style="color:#74B602;">：专门为某个特定接口（如局域网接口）提供的动态 IP 地址池，限制于该接口使用。</font>

**<font style="color:#74B602;">全局地址池是全局有效的，接口地址池仅在特定接口上使用。</font>**

（6）DHCP的优点？

<font style="color:#74B602;">自动化分配ip地址：减少手动配置，提高工作效率</font>

<font style="color:#74B602;">避免冲突：通过动态分配IP地址，避免了IP地址冲突的问题</font>

<font style="color:#74B602;">资源优化：可以有效利用IP地址，避免浪费</font>

<font style="color:#74B602;">移动性支持：对于移动设备，dhcp服务器可以为其进行自动分配，无需手动更改</font>

**三、参考答案：**

（1）

<font style="color:black;">[Huawei]sysname R7-007</font>

<font style="color:black;">[R7-007]int g 0/0/1</font>

<font style="color:black;">[R7-007-GigabitEthernet0/0/1]ip address 192.168.1.254 24</font>

<font style="color:black;">[R7-007-GigabitEthernet0/0/1]int g 0/0/2</font>

<font style="color:black;">[R7-007-GigabitEthernet0/0/2]ip address 192.168.2.254 24</font>

<font style="color:black;">[R7-007-GigabitEthernet0/0/2]q</font>

<font style="color:black;">（</font><font style="color:black;">2</font><font style="color:black;">）</font>

<font style="color:black;">[R7-007]dhcp enable</font>

<font style="color:black;">[R7-007]ip pool pool1</font><font style="color:black;"> #</font><font style="color:black;">新建一个</font><font style="color:black;">IP</font><font style="color:black;">地址池，命名为</font><font style="color:black;">pool1</font>

<font style="color:black;">[R7-007-ip-pool-pool1]network 192.168.1.0 mask 24</font><font style="color:black;"> #</font><font style="color:black;">配置地址池的网络号和子网掩码</font>

<font style="color:black;">[R7-007-ip-pool-pool1]gateway-list 192.168.1.254</font><font style="color:black;"> #</font><font style="color:black;">配置网关</font>

<font style="color:black;">[R7-007-ip-pool-pool1]excluded-ip-address 192.168.1.253</font><font style="color:black;"> #</font><font style="color:black;">排除掉某些</font><font style="color:black;">ip</font><font style="color:black;">，不参与自动配置</font>

<font style="color:black;">[R7-007-ip-pool-pool1]dns-list 192.168.1.1</font><font style="color:black;"> #</font><font style="color:black;">配置</font><font style="color:black;">dns</font><font style="color:black;">信息</font>

<font style="color:black;">[R7-007-ip-pool-pool1]q</font>

<font style="color:black;">（</font><font style="color:black;">3</font><font style="color:black;">）</font>

<font style="color:black;">[R7-007]int g 0/0/1</font>

<font style="color:black;">[R7-007-GigabitEthernet0/0/1]dhcp select global</font>

<font style="color:black;">[R7-007-GigabitEthernet0/0/1]q</font>

<font style="color:black;">[R7-007]int g 0/0/2</font>

<font style="color:black;">[R7-007-GigabitEthernet0/0/2]dhcp select interface</font>

<font style="color:black;">[R7-007-GigabitEthernet0/0/2]q</font>

（5）全局地址池的主要特点是其可以为整个网络内的设备提供IP地址和其他网络参数，一般应用于DHCP服务器与DHCP客户端在不同ip网段情形，但也可以应用于DHCP服务器与DHCP客户端在同一个ip网段情形，默认情况下，可以给DHCP客户端分配与接口同网段的IP地址，也可以分配不同网段的IP地址（DHCP中继组网）。

接口地址池更侧重于为特定接口下的设备提供IP地址和其他网络参数。可动态分配的IP地址范围就是接口的IP地址所在的网段，使用接口地址池可以方便地为用户分配与DHCP服务器在同一个网段的设备的IP地址。

（6）DHCP服务器的优势包括：

自动化分配：减少了手动配置的工作量，提高了工作效率。

避免冲突：通过动态分配IP地址，避免了IP地址冲突的问题。

资源优化：可以更有效地利用IP地址资源，避免浪费。

移动性支持：对于移动设备，DHCP服务器可以自动为其分配新的IP地址，无需手动更改。



## 实验七：IPv6配置实验
**一、建立拓扑：**

![](https://cdn.nlark.com/yuque/0/2024/png/50372252/1733188076587-51aa3179-f6be-4048-902f-bed914310c9c.png)

**二、具体要求如下：**

（1）请参照拓扑图，将R8重命名为R8-学号最后3位，将R9重命名为R9-学号最后3位，（2）启用路由器R8、R9的IPv6功能，并配置接口的全局单播IPv6地址和本地链路地址。

<font style="color:#117CEE;">【R8】sy</font>

<font style="color:#117CEE;">sy R8-324</font>

<font style="color:#117CEE;">un in en</font>

<font style="color:#117CEE;">interface g0/0/1</font>

<font style="color:#117CEE;">ipv6 en</font>

<font style="color:#117CEE;">ipv6 address 2001::1 64</font>

<font style="color:#117CEE;">ipv6 address fe80::1 link-local</font>

<font style="color:#117CEE;">q</font>

<font style="color:#117CEE;">interface s0/0/0</font>

<font style="color:#117CEE;">ipv6 en </font>

<font style="color:#117CEE;">ipv6 address 2001::1 64</font>

<font style="color:#117CEE;">ipv6 address fe80::1 link-local</font>

<font style="color:#117CEE;">q</font>

<font style="color:#117CEE;">save</font>

<font style="color:#117CEE;">【R9】sy</font>

<font style="color:#117CEE;">sy R9-324</font>

<font style="color:#117CEE;">un in en</font>

<font style="color:#117CEE;">interface g0/0/1 </font>

<font style="color:#117CEE;">ipv6 en</font>

<font style="color:#117CEE;">ipv6 address 3001::1 64</font>

<font style="color:#117CEE;">ipv6 address fe80::2 link-local</font>

<font style="color:#117CEE;">interface s0/0/0</font>

<font style="color:#117CEE;">ipv6 en</font>

<font style="color:#117CEE;">ipv6 address 2011::2 64</font>

<font style="color:#117CEE;">ipv6 address fe80::2 link-local</font>

<font style="color:#117CEE;">q</font>

<font style="color:#117CEE;">save</font>

（3）使用display ipv6 interface brief 和display ipv6 interface g0/0/0检查路由器的配置结果。

（4）参照拓扑图，给PC21和PC22配置IPv6地址。并使用ping命令和tracert命令测试PC21和PC22的连通性，此时是否能正常连通？为什么？

（5）在路由器R8和R9上配置静态路由。重新测试主机间的连通性。

<font style="color:#117CEE;">ipv6 route-static 3001::1 64 2011::2</font>

<font style="color:#117CEE;">ipv6 route-static 2001::1 64 2011::1</font>

<font style="color:#117CEE;">// ipv6 route-static 2011::1 64 2001::1 (测试一下反着写行不行)</font>

**三、参考答案：**

（1）

<font style="color:black;"><Huawei>system-view</font>

<font style="color:black;">[Huawei]undo info-center enable</font>

<font style="color:black;">[Huawei]sysname R8-007</font>

<font style="color:black;">（</font><font style="color:black;">2</font><font style="color:black;">）</font>

<font style="color:black;">[R8-007]ipv6</font><font style="color:black;"> #</font><font style="color:black;">开启路由器转发</font><font style="color:black;">ipv6</font><font style="color:black;">数据包的功能，必须先开启路由器的转发功能，才能开启接口的转发功能</font>

<font style="color:black;">[R8-007]int g 0/0/1</font>

<font style="color:black;">[R8-007-GigabitEthernet0/0/1]ipv6 enable</font><font style="color:black;"> #</font><font style="color:black;">开启接口转发</font><font style="color:black;">ipv6</font><font style="color:black;">数据包的功能</font>

<font style="color:black;">[R8-007-GigabitEthernet0/0/1]ipv6 address 2001::1 64</font><font style="color:black;"> #</font><font style="color:black;">配置接口的全局单播地址</font>

<font style="color:black;">[R8-007-GigabitEthernet0/0/1]ipv6 address fe80::1 link-local</font><font style="color:black;"> #</font><font style="color:black;">手动设置接口的本地链路地址</font>

<font style="color:black;">[R8-007-GigabitEthernet0/0/1]q</font>

<font style="color:black;">[R8-007]int s 0/0/0</font>

<font style="color:black;">[R8-007-Serial0/0/0]ipv6 enable</font>

<font style="color:black;">[R8-007-Serial0/0/0]ipv6 address 2011::1 64</font>

<font style="color:black;">[R8-007-Serial0/0/0]ipv6 address fe80::1 link-local</font>

<font style="color:black;">[R8-007-Serial0/0/0]q</font>



（5）

<font style="color:black;">[R8-007]ipv6 route-static 3001:: 64 2011::2</font>

<font style="color:black;">[R9-007]ipv6 route-static 2001:: 64 2011::1</font>

****


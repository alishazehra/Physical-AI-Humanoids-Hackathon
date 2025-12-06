# **📗 Chapter 2 — Sensing, Perception & Basic Control for Humanoids**

## **2.1 Sensors**

| **Sensor Type** | **Function** | **Example** |
|----------------|-------------|-------------|
| Proprioceptive | Measure internal state | Encoders, IMUs, torque sensors |
| Exteroceptive | Measure environment | Cameras, LiDAR, ultrasonic sensors |
| Tactile | Measure contact/pressure | Pressure arrays, haptic sensors |

---

## **2.2 Perception**

| **Perception Task** | **Description** |
|-------------------|----------------|
| Computer Vision | Object detection, segmentation, depth estimation |
| Sensor Fusion | Combine IMU, encoders, camera/LiDAR for accurate state |
| Localization & Mapping | SLAM for navigation and environment understanding |

---

## **2.3 Kinematics & Dynamics**

| **Concept** | **Use** |
|------------|---------|
| Forward Kinematics | Compute end-effector position from joint angles |
| Inverse Kinematics | Compute joint angles for desired pose |
| Dynamics | Relationship between forces/torques and motion |

---

## **2.4 Control Methods**

| **Control Type** | **Purpose** |
|----------------|-------------|
| Open-loop | Execute trajectory without feedback |
| PID / Feedback | Adjust based on sensor measurements |
| Impedance / Admittance | Safe contact with humans or environment |
| Model Predictive Control (MPC) | Optimize trajectories under constraints |

---

## **2.5 Locomotion & Balance**

| **Technique** | **Description** |
|--------------|----------------|
| Static Balance | COM always over support polygon |
| Dynamic Balance | Balance while moving (ZMP, CPG) |
| Footstep Planning | Plan safe steps over terrain |

---

## **2.6 Manipulation & Grasping**

| **Aspect** | **Details** |
|------------|-------------|
| Grasp Types | Precision, power, pinch |
| Planning | Object affordances, grasp quality metrics |
| Hand Design | Underactuated vs fully actuated, tactile sensors improve reliability |

---

## **2.7 Human–Robot Interaction (HRI) & Safety**

| **Topic** | **Detail** |
|-----------|-----------|
| Intent Recognition | Detect human gestures and speech |
| Safety Layers | Compliance, software limits, emergency stop |
| Ethics & Usability | Predictable behavior, explainable AI |

---

## **2.8 Software & Simulation Tools**

| **Tool** | **Function** |
|----------|-------------|
| ROS / ROS 2 | Robot middleware and control |
| Gazebo | 3D simulation with physics |
| Webots / PyBullet | Lightweight simulation |
| MoveIt | Motion planning |
| OpenCV | Computer vision |

---

## **2.9 Exercises & Projects**

| **Exercise** | **Description** |
|-------------|----------------|
| Sensor Fusion Mini-project | Fuse IMU + encoder data for joint state estimation |
| Inverse Kinematics | Implement IK for a 6-DOF arm |
| Balance Simulator | ZMP-based walking controller in PyBullet |
| Perception Pipeline | Train object detector and integrate into grasping |

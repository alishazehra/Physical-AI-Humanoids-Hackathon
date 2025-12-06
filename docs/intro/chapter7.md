# **📙 Chapter 7 — Humanoid Locomotion & Advanced Motion Planning**

## **7.1 Walking & Gait Generation**

| **Concept** | **Description** | **Example** |
|------------|----------------|-------------|
| Static Walking | Keep center of mass over support polygon | Slow, stable motion for uneven surfaces |
| Dynamic Walking | Balance while moving using ZMP & CPG | Faster walking, running |
| Gait Planning | Predefine footstep sequence and timing | Walking on flat or uneven terrain |
| Footstep Adjustment | Adapt steps in real-time based on sensors | Step over obstacles |

---

## **7.2 Balance & Stability**

| **Aspect** | **Technique** |
|------------|---------------|
| Zero Moment Point (ZMP) | Ensure stability by keeping net moment zero |
| Capture Point Control | Recover from disturbances in walking |
| Center of Mass (COM) Control | Maintain balance dynamically |
| Push Recovery | Adjust gait to handle external forces |

---

## **7.3 Motion Planning for Arms & Whole Body**

| **Planning Type** | **Description** | **Tools** |
|-----------------|----------------|-----------|
| Inverse Kinematics (IK) | Compute joint angles for desired end-effector position | MoveIt, ROS |
| Trajectory Planning | Generate smooth motion over time | MoveIt, custom algorithms |
| Whole-Body Motion | Coordinate arms, torso, legs together | Hierarchical control, optimization |
| Collision Avoidance | Ensure safe paths around obstacles | Gazebo, PyBullet, MoveIt |

---

## **7.4 Sensor Integration for Motion**

| **Sensor** | **Purpose** | **Effect on Motion** |
|------------|------------|--------------------|
| IMU | Orientation & acceleration | Balance control |
| Force/Torque Sensors | Detect contact & load | Grip adjustment, fall prevention |
| Encoders | Joint position & velocity | Precise trajectory tracking |
| Cameras / LiDAR | Environment perception | Adjust steps, avoid obstacles |

---

## **7.5 Advanced Locomotion Techniques**

| **Technique** | **Description** | **Example** |
|---------------|----------------|-------------|
| Central Pattern Generators (CPG) | Generate rhythmic motion patterns | Walking, running |
| Reinforcement Learning | Learn adaptive gait in simulation | Uneven terrain locomotion |
| Multi-Contact Planning | Handle stairs, slopes, irregular surfaces | Atlas, HRP robots |
| Energy Optimization | Reduce energy consumption while walking | Efficient gait design |

---

## **7.6 Exercises & Projects**

| **Exercise** | **Description** |
|-------------|----------------|
| Gait Simulation | Implement static and dynamic walking in PyBullet or Gazebo |
| Balance Controller | Implement ZMP or COM-based balance algorithm |
| Trajectory Planning | Plan arm motions to perform pick-and-place while walking |
| Obstacle Navigation | Integrate LiDAR/camera data to adjust steps dynamically |

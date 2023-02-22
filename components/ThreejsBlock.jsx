'use client'
import {
	MeshDistortMaterial,
	GradientTexture,
	OrbitControls,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function ThreejsBlock() {
	return (
		<Canvas className="hover:cursor-grab">
			<OrbitControls enableZoom={false} enablePan={false} />
			<ambientLight />
			<mesh>
				<sphereGeometry args={[2, 64, 64]} />
				<MeshDistortMaterial distort={0.5} speed={2} roughness={0}>
					<GradientTexture
						stops={[0, 0.8, 1]}
						colors={['#e94299', '#f1faee', '#e94299']}
						size={100}
					/>
				</MeshDistortMaterial>
			</mesh>
		</Canvas>
	)
}

import '@google/model-viewer';

export default function ModelViewer() {
  return (
    <model-viewer
    src="/public/flying_icarus_animated.glb"
    alt="A 3D model"
    auto-rotate
    camera-controls
    style={{ width: '100%', height: '500px' }}
    />
  );
}

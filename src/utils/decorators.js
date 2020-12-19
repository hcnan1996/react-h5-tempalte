// TestDecorator.tsx
function Log(target, name, descriptor) {
  /**
   * @param target 对应 methods 这个对象
   * @param name 对应属性方法的名称
   * @param descriptor 对应属性方法的修饰符
   */
  const oldValue = descriptor.value;
  // 实现一个拦截器，在拦截器中实现日志打印，并在最后返回旧值的结果
  descriptor.value = function log() {
    // 实现日志打印
    console.log(`这是调用方法【${name}】前打印的日志`)
    // 调用原始方法实现原始逻辑
    return oldValue.apply(this, arguments);
    // console.log(`这是调用方法【${name}】后打印的日志`)
  };
  // 最后返回一个新的描述器
  return descriptor;
}

export default Log;

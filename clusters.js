import cluster from 'cluster';
import os from 'os';

//listar todos os cpus do pc
const CPUS = os.cpus();

//Verificar se o cluster e master
if(cluster.isMaster){
  CPUS.forEach(()=>cluster.fork());
  cluster.on('listening', worker => {
    console.log('Cluster %d conectado', worker.process.pid);
  });
  cluster.on('disconnect',worker => {
    console.log('Cluster %d disconnect', worker.process.pid);
  });
  cluster.on('exit', worker => {
    console.log('Cluster %d saiu do ar',worker.process.pid);
    cluster.fork();
  });
}else {
  require('./index.js');
  // riqueri('./index.js');
}
